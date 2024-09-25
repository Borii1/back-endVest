"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var FundingRoundService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundingRoundService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const funding_entity_1 = require("../../entities/financialentities/funding.entity");
const investor_service_1 = require("../businessprofileservice/investor.service");
const capInvestor_entity_1 = require("../../entities/financialentities/capInvestor.entity");
const activity_service_1 = require("../activityservice/activity.service");
let FundingRoundService = FundingRoundService_1 = class FundingRoundService {
    constructor(fundingRoundRepository, investorService, capTableInvestorRepository, activityService) {
        this.fundingRoundRepository = fundingRoundRepository;
        this.investorService = investorService;
        this.capTableInvestorRepository = capTableInvestorRepository;
        this.activityService = activityService;
        this.logger = new common_1.Logger(FundingRoundService_1.name);
    }
    async create(fundingId, fundingRoundData, investorIds, investorShares, investorTitles, userId) {
        console.log('Investor IDs:', investorIds);
        const investors = await this.investorService.findByIds(investorIds);
        console.log('Fetched Investors:', investors);
        const minimumShare = fundingRoundData.minimumShare;
        const moneyRaised = investorShares.reduce((acc, shares, index) => acc + (minimumShare * shares), 0);
        const funding = this.fundingRoundRepository.create({
            ...fundingRoundData,
            startup: { id: fundingId },
            investors,
            moneyRaised
        });
        const createdCapTable = await this.fundingRoundRepository.save(funding);
        console.log('Created Cap Table:', createdCapTable);
        const capTableInvestors = investors.map((investor, index) => {
            const capTableInvestor = new capInvestor_entity_1.CapTableInvestor();
            capTableInvestor.capTable = createdCapTable;
            capTableInvestor.investor = investor;
            capTableInvestor.title = investorTitles[index];
            capTableInvestor.shares = investorShares[index];
            capTableInvestor.user = { id: userId };
            capTableInvestor.totalInvestment = minimumShare * investorShares[index];
            return capTableInvestor;
        });
        await Promise.all(capTableInvestors.map(async (capTableInvestor) => {
            await this.capTableInvestorRepository.save(capTableInvestor);
            return this.findById(createdCapTable.id);
        }));
        return createdCapTable;
    }
    async findById(id) {
        console.log(`Attempting to find funding round with ID: ${id}`);
        try {
            const fundingRound = await this.fundingRoundRepository.findOne({
                where: { id, isDeleted: false },
                relations: ['startup', 'capTableInvestors', 'capTableInvestors.investor'],
            });
            if (!fundingRound) {
                console.log(`Funding round with ID ${id} not found`);
                throw new common_1.NotFoundException('Funding round not found');
            }
            return fundingRound;
        }
        catch (error) {
            console.error('Error finding funding round by ID:', error);
            throw new common_1.NotFoundException('Funding round not found');
        }
    }
    async findAll() {
        return this.fundingRoundRepository.find({
            where: { isDeleted: false },
            relations: ['startup', 'capTableInvestors', 'capTableInvestors.investor'],
        });
    }
    async update(id, updateData, investorData, userId) {
        const fundingRound = await this.findById(id);
        if (!fundingRound) {
            throw new common_1.NotFoundException('Funding round not found');
        }
        const minimumShare = fundingRound.minimumShare;
        Object.assign(fundingRound, updateData);
        const existingCapTableInvestors = await this.capTableInvestorRepository.find({
            where: { capTable: { id: fundingRound.id } },
            relations: ['investor'],
        });
        const existingCapTableInvestorMap = new Map();
        existingCapTableInvestors.forEach(investor => existingCapTableInvestorMap.set(investor.investor.id, investor));
        const updatedCapTableInvestors = [];
        for (const { id: investorId, shares, title, totalInvestment } of investorData) {
            let capTableInvestor = existingCapTableInvestorMap.get(investorId);
            if (capTableInvestor) {
                capTableInvestor.shares = shares;
                capTableInvestor.title = title;
                capTableInvestor.totalInvestment = minimumShare * shares;
                capTableInvestor.user = { id: userId };
            }
            else {
                capTableInvestor = this.capTableInvestorRepository.create({
                    capTable: fundingRound,
                    investor: { id: investorId },
                    shares: shares,
                    title: title,
                    totalInvestment: minimumShare * shares,
                    user: { id: userId }
                });
            }
            updatedCapTableInvestors.push(capTableInvestor);
        }
        await this.capTableInvestorRepository.save(updatedCapTableInvestors);
        fundingRound.moneyRaised = updatedCapTableInvestors.reduce((acc, investor) => acc + investor.totalInvestment, 0);
        const updatedFundingRound = await this.fundingRoundRepository.save(fundingRound);
        updatedFundingRound.capTableInvestors = updatedCapTableInvestors;
        return updatedFundingRound;
    }
    async softDelete(id) {
        const fundingRound = await this.fundingRoundRepository.findOne({
            where: { id },
            relations: ['capTableInvestors']
        });
        if (!fundingRound) {
            throw new common_1.NotFoundException('Funding round not found');
        }
        fundingRound.isDeleted = true;
        fundingRound.capTableInvestors.forEach(investor => {
            investor.isDeleted = true;
        });
        await this.capTableInvestorRepository.save(fundingRound.capTableInvestors);
        await this.fundingRoundRepository.save(fundingRound);
    }
    async getTotalMoneyRaisedForStartup(startupId) {
        try {
            const fundingRounds = await this.fundingRoundRepository.find({
                where: { startup: { id: startupId }, isDeleted: false },
            });
            let totalMoneyRaised = 0;
            fundingRounds.forEach((round) => {
                totalMoneyRaised += round.moneyRaised;
            });
            return totalMoneyRaised;
        }
        catch (error) {
            console.error('Error calculating total money raised:', error);
            throw error;
        }
    }
    async getTotalSharesForInvestor(investorId, companyId) {
        try {
            const capTableInvestors = await this.capTableInvestorRepository.find({
                where: {
                    investor: { id: investorId },
                    capTable: { startup: { id: companyId } }
                },
                relations: ['capTable', 'capTable.startup'],
            });
            let totalShares = 0;
            capTableInvestors.forEach((capTableInvestor) => {
                totalShares += capTableInvestor.totalInvestment;
            });
            return totalShares;
        }
        catch (error) {
            console.error('Error calculating total shares for investor:', error);
            throw error;
        }
    }
    async getAllInvestorsDataOfAllTheCompany(companyId) {
        try {
            const totalMoneyRaised = await this.getTotalMoneyRaisedForStartup(companyId);
            const capTableInvestors = await this.capTableInvestorRepository.find({
                where: {
                    capTable: { startup: { id: companyId } },
                    isDeleted: false,
                },
                relations: ['investor', 'capTable', 'capTable.startup'],
            });
            const investorDataMap = new Map();
            capTableInvestors.forEach((capTableInvestor) => {
                const { id, firstName, lastName } = capTableInvestor.investor;
                const investorName = `${firstName} ${lastName}`;
                const { title, shares, capTable } = capTableInvestor;
                const minimumShare = capTable.minimumShare;
                const totalInvestment = shares * minimumShare;
                if (investorDataMap.has(id)) {
                    const existingData = investorDataMap.get(id);
                    existingData.shares += shares;
                    existingData.totalShares += totalInvestment;
                    existingData.totalInvestment += totalInvestment;
                    existingData.percentage = totalMoneyRaised ? (existingData.totalInvestment / totalMoneyRaised) * 100 : 0;
                }
                else {
                    investorDataMap.set(id, {
                        id,
                        name: investorName,
                        title,
                        shares,
                        totalShares: totalInvestment,
                        totalInvestment: totalInvestment,
                        percentage: totalMoneyRaised ? (totalInvestment / totalMoneyRaised) * 100 : 0,
                    });
                }
            });
            return Array.from(investorDataMap.values());
        }
        catch (error) {
            this.logger.error('Error fetching all investor data:', error.message);
            throw new common_1.InternalServerErrorException('Error fetching all investor data');
        }
    }
    async getAllInvestorDataByEachCompany(companyId) {
        try {
            const totalMoneyRaised = await this.getTotalMoneyRaisedForStartup(companyId);
            const capTableInvestors = await this.capTableInvestorRepository.find({
                where: {
                    capTable: { startup: { id: companyId } },
                    isDeleted: false,
                },
                relations: ['investor', 'capTable', 'capTable.startup'],
            });
            const investorDataMap = new Map();
            capTableInvestors.forEach((capTableInvestor) => {
                const investorId = capTableInvestor.investor.id;
                const investorName = `${capTableInvestor.investor.firstName} ${capTableInvestor.investor.lastName}`;
                const investorTitle = capTableInvestor.title;
                const shares = capTableInvestor.shares;
                const minimumShare = capTableInvestor.capTable.minimumShare;
                const totalInvestment = shares * minimumShare;
                if (investorDataMap.has(investorId)) {
                    const existingData = investorDataMap.get(investorId);
                    existingData.shares = shares;
                    existingData.totalShares += totalInvestment;
                    existingData.totalInvestment += totalInvestment;
                    existingData.percentage = totalMoneyRaised !== 0 ? (existingData.totalInvestment / totalMoneyRaised) * 100 : 0;
                }
                else {
                    investorDataMap.set(investorId, {
                        id: investorId,
                        name: investorName,
                        title: investorTitle,
                        shares,
                        totalShares: totalInvestment,
                        totalInvestment: totalInvestment,
                        percentage: totalMoneyRaised ? (totalInvestment / totalMoneyRaised) * 100 : 0,
                    });
                }
            });
            return Array.from(investorDataMap.values());
        }
        catch (error) {
            this.logger.error('Error fetching all investor data:', error);
            throw new common_1.InternalServerErrorException('Error fetching all investor data');
        }
    }
    async getTotalMonthlyFunding(userId, year) {
        try {
            const userCompanies = await this.fundingRoundRepository.createQueryBuilder('fundingRound')
                .innerJoinAndSelect('fundingRound.startup', 'startup')
                .innerJoinAndSelect('startup.user', 'user')
                .where('user.id = :userId', { userId })
                .andWhere('YEAR(fundingRound.createdAt) = :year', { year })
                .select(['fundingRound.createdAt', 'fundingRound.moneyRaised'])
                .getMany();
            if (!userCompanies.length) {
                throw new common_1.NotFoundException('No funding rounds found for the specified user and year');
            }
            const monthlyTotals = new Map();
            userCompanies.forEach(round => {
                const month = round.createdAt.toISOString().slice(0, 7);
                if (!monthlyTotals.has(month)) {
                    monthlyTotals.set(month, 0);
                }
                monthlyTotals.set(month, monthlyTotals.get(month) + round.moneyRaised);
            });
            return Array.from(monthlyTotals.entries()).map(([month, total]) => ({ month, total }));
        }
        catch (error) {
            this.logger.error('Error calculating total monthly funding:', error.message);
            throw new common_1.InternalServerErrorException('Error calculating total monthly funding');
        }
    }
    async getTotalMonthlyFundingByCompany(companyId, year) {
        try {
            const companyFundingRounds = await this.fundingRoundRepository.createQueryBuilder('fundingRound')
                .innerJoinAndSelect('fundingRound.startup', 'startup')
                .where('startup.id = :companyId', { companyId })
                .andWhere('YEAR(fundingRound.createdAt) = :year', { year })
                .select(['fundingRound.createdAt', 'fundingRound.moneyRaised'])
                .getMany();
            if (!companyFundingRounds.length) {
                throw new common_1.NotFoundException('No funding rounds found for the specified company and year');
            }
            const monthlyTotals = new Map();
            companyFundingRounds.forEach(round => {
                const month = round.createdAt.toISOString().slice(0, 7);
                if (!monthlyTotals.has(month)) {
                    monthlyTotals.set(month, 0);
                }
                monthlyTotals.set(month, monthlyTotals.get(month) + round.moneyRaised);
            });
            return Array.from(monthlyTotals.entries()).map(([month, total]) => ({ month, total }));
        }
        catch (error) {
            this.logger.error('Error calculating total monthly funding by company:', error.message);
            throw new common_1.InternalServerErrorException('Error calculating total monthly funding by company');
        }
    }
};
exports.FundingRoundService = FundingRoundService;
exports.FundingRoundService = FundingRoundService = FundingRoundService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(funding_entity_1.FundingRound)),
    __param(2, (0, typeorm_1.InjectRepository)(capInvestor_entity_1.CapTableInvestor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        investor_service_1.InvestorService,
        typeorm_2.Repository,
        activity_service_1.ActivityService])
], FundingRoundService);
//# sourceMappingURL=funding.service.js.map