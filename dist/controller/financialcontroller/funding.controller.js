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
var FundingRoundController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundingRoundController = void 0;
const common_1 = require("@nestjs/common");
const funding_service_1 = require("../../service/financialservice/funding.service");
const startup_service_1 = require("../../service/businessprofileservice/startup.service");
const user_service_1 = require("../../service/user.service");
const jwt = require("jsonwebtoken");
const investor_service_1 = require("../../service/businessprofileservice/investor.service");
let FundingRoundController = FundingRoundController_1 = class FundingRoundController {
    constructor(startupService, userService, investorService, fundingRoundService) {
        this.startupService = startupService;
        this.userService = userService;
        this.investorService = investorService;
        this.fundingRoundService = fundingRoundService;
        this.logger = new common_1.Logger(FundingRoundController_1.name);
    }
    getUserIdFromToken(authorizationHeader) {
        if (!authorizationHeader) {
            throw new common_1.UnauthorizedException('Authorization header is required');
        }
        const token = authorizationHeader.replace('Bearer ', '');
        const payload = jwt.verify(token, 'secretKey');
        return payload.userId;
    }
    async getInvestorsByIds(ids) {
        const idArray = ids.split(',').map(id => parseInt(id, 10));
        return this.investorService.findByIds(idArray);
    }
    async createFundingRound(request, fundingRoundData, investors, shares, titles, userId) {
        try {
            this.logger.log('Received funding round data:', JSON.stringify(fundingRoundData));
            const startupId = fundingRoundData.startup?.id;
            if (!startupId) {
                throw new common_1.HttpException('Startup ID is required', common_1.HttpStatus.BAD_REQUEST);
            }
            const investorIds = fundingRoundData.investors?.map(investor => investor.id) || [];
            this.logger.log('Extracted investor IDs:', investorIds);
            const userId = this.getUserIdFromToken(request.headers['authorization']);
            const createdFunding = await this.fundingRoundService.create(startupId, fundingRoundData, investorIds, shares, titles, userId);
            this.logger.log('Funding round created:', JSON.stringify(createdFunding));
            return createdFunding;
        }
        catch (error) {
            this.logger.error('Failed to create funding round:', error);
            throw new common_1.HttpException('Failed to create funding round', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            const fundingRounds = await this.fundingRoundService.findAll();
            if (!fundingRounds || fundingRounds.length === 0) {
                throw new common_1.NotFoundException('No funding rounds found');
            }
            return fundingRounds;
        }
        catch (error) {
            this.logger.error('Failed to fetch funding rounds:', error);
            throw new common_1.HttpException('Failed to fetch funding rounds', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findById(id) {
        const fundingRound = await this.fundingRoundService.findById(id);
        if (!fundingRound) {
            throw new common_1.NotFoundException('Funding round not found');
        }
        return fundingRound;
    }
    async updateFundingRound(id, body, request) {
        try {
            const { updateData, investors } = body;
            const userId = this.getUserIdFromToken(request.headers['authorization']);
            const updatedFundingRound = await this.fundingRoundService.update(id, updateData, investors, userId);
            return updatedFundingRound;
        }
        catch (error) {
            this.logger.error('Failed to update funding round:', error);
            throw new common_1.HttpException('Failed to update funding round', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async softDeleteFundingRound(id) {
        return this.fundingRoundService.softDelete(id);
    }
    async getTotalMoneyRaisedForStartup(startupId) {
        try {
            const totalMoneyRaised = await this.fundingRoundService.getTotalMoneyRaisedForStartup(startupId);
            return { totalMoneyRaised };
        }
        catch (error) {
            throw new common_1.NotFoundException('Startup not found or error calculating total money raised');
        }
    }
    async getTotalSharesForInvestor(investorId, companyId) {
        return this.fundingRoundService.getTotalSharesForInvestor(investorId, companyId);
    }
    async getAllInvestorsDataOfAllTheCompany(companyId) {
        try {
            const investors = await this.fundingRoundService.getAllInvestorsDataOfAllTheCompany(companyId);
            return investors.length ? investors : [];
        }
        catch (error) {
            this.logger.error(`Failed to fetch investors for company ${companyId}:`, error);
            throw new common_1.HttpException('Failed to fetch investors', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllInvestorDataByEachCompany(companyId) {
        try {
            const investors = await this.fundingRoundService.getAllInvestorDataByEachCompany(companyId);
            if (investors.length === 0) {
                return [];
            }
            return investors;
        }
        catch (error) {
            this.logger.error(`Failed to fetch investors for company ${companyId}:`, error);
            throw new common_1.HttpException('Failed to fetch investors', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getMonthlyFunding(userId, year) {
        return this.fundingRoundService.getTotalMonthlyFunding(userId, year);
    }
    async getCompanyMonthlyFunding(companyId, year) {
        return this.fundingRoundService.getTotalMonthlyFundingByCompany(companyId, year);
    }
};
exports.FundingRoundController = FundingRoundController;
__decorate([
    (0, common_1.Get)('by-ids'),
    __param(0, (0, common_1.Query)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FundingRoundController.prototype, "getInvestorsByIds", null);
__decorate([
    (0, common_1.Post)('createfund'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Body)('investors')),
    __param(3, (0, common_1.Body)('shares')),
    __param(4, (0, common_1.Body)('titles')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, Object, Array, Array, Array, Number]),
    __metadata("design:returntype", Promise)
], FundingRoundController.prototype, "createFundingRound", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FundingRoundController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FundingRoundController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Request]),
    __metadata("design:returntype", Promise)
], FundingRoundController.prototype, "updateFundingRound", null);
__decorate([
    (0, common_1.Put)(':id/delete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FundingRoundController.prototype, "softDeleteFundingRound", null);
__decorate([
    (0, common_1.Get)(':id/total-money-raised'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FundingRoundController.prototype, "getTotalMoneyRaisedForStartup", null);
__decorate([
    (0, common_1.Get)(':investorId/company/:companyId/total-shares'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FundingRoundController.prototype, "getTotalSharesForInvestor", null);
__decorate([
    (0, common_1.Get)(':companyId/investors/all'),
    __param(0, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FundingRoundController.prototype, "getAllInvestorsDataOfAllTheCompany", null);
__decorate([
    (0, common_1.Get)('investors/company/:companyId'),
    __param(0, (0, common_1.Param)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FundingRoundController.prototype, "getAllInvestorDataByEachCompany", null);
__decorate([
    (0, common_1.Get)('monthly-funding/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Query)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FundingRoundController.prototype, "getMonthlyFunding", null);
__decorate([
    (0, common_1.Get)('company-monthly-funding/:companyId'),
    __param(0, (0, common_1.Param)('companyId')),
    __param(1, (0, common_1.Query)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FundingRoundController.prototype, "getCompanyMonthlyFunding", null);
exports.FundingRoundController = FundingRoundController = FundingRoundController_1 = __decorate([
    (0, common_1.Controller)('funding-rounds'),
    __metadata("design:paramtypes", [startup_service_1.StartupService,
        user_service_1.UserService,
        investor_service_1.InvestorService,
        funding_service_1.FundingRoundService])
], FundingRoundController);
//# sourceMappingURL=funding.controller.js.map