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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const investor_entity_1 = require("../../entities/businessprofileentities/investor.entity");
const typeorm_3 = require("typeorm");
let InvestorService = class InvestorService {
    constructor(investorsRepository) {
        this.investorsRepository = investorsRepository;
    }
    async findByIds(ids) {
        console.log('findByIds received ids:', ids);
        if (ids.length === 0) {
            return [];
        }
        const investors = await this.investorsRepository.find({ where: { id: (0, typeorm_3.In)(ids) } });
        console.log('Fetched investors from DB:', investors);
        return investors;
    }
    async findOne(id) {
        return this.investorsRepository.findOne({ where: { id } });
    }
    async create(userId, investorData) {
        const investor = this.investorsRepository.create({ ...investorData, user: { id: userId } });
        return this.investorsRepository.save(investor);
    }
    async findAllCreatedUser(userId) {
        return this.investorsRepository.find({ where: { user: { id: userId } } });
    }
    async findAllInvestors() {
        return this.investorsRepository.find();
    }
    async update(id, investorData) {
        const existingInvestor = await this.findOne(id);
        if (!existingInvestor) {
            throw new common_1.NotFoundException('Investor not found');
        }
        const updatedInvestor = await this.investorsRepository.save({ ...existingInvestor, ...investorData });
        return updatedInvestor;
    }
    async softDelete(id) {
        const existingInvestor = await this.findOne(id);
        if (!existingInvestor) {
            throw new common_1.NotFoundException('Investor not found');
        }
        await this.investorsRepository.update(id, { isDeleted: true });
    }
};
exports.InvestorService = InvestorService;
exports.InvestorService = InvestorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(investor_entity_1.Investor)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], InvestorService);
//# sourceMappingURL=investor.service.js.map