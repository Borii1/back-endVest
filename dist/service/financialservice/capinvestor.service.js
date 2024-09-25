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
exports.CapTableInvestorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const capInvestor_entity_1 = require("../../entities/financialentities/capInvestor.entity");
let CapTableInvestorService = class CapTableInvestorService {
    constructor(capTableInvestorRepository) {
        this.capTableInvestorRepository = capTableInvestorRepository;
    }
    async getInvestorInformation(capTableId) {
        return this.capTableInvestorRepository.find({
            where: { capTable: { id: capTableId } },
        });
    }
    async findAll(userId) {
        return this.capTableInvestorRepository.find({ where: { user: { id: userId } } });
    }
    async findOne(id) {
        return this.capTableInvestorRepository.findOne({ where: { id } });
    }
    async findTopInvestorByUser(userId) {
        const topInvestor = await this.capTableInvestorRepository.findOne({
            where: { user: { id: userId } },
            relations: ['investor'],
            order: { totalInvestment: 'DESC' },
        });
        if (!topInvestor) {
            return null;
        }
        return {
            topInvestorName: `${topInvestor.investor.firstName} ${topInvestor.investor.lastName}`,
            totalInvestment: topInvestor.totalInvestment,
        };
    }
    async removeInvestor(investorId, capTableId) {
        const capTableInvestor = await this.capTableInvestorRepository.findOne({
            where: { investor: { id: investorId }, capTable: { id: capTableId } },
        });
        if (!capTableInvestor) {
            throw new common_1.NotFoundException('CapTableInvestor not found');
        }
        capTableInvestor.investorRemoved = true;
        await this.capTableInvestorRepository.save(capTableInvestor);
    }
};
exports.CapTableInvestorService = CapTableInvestorService;
exports.CapTableInvestorService = CapTableInvestorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(capInvestor_entity_1.CapTableInvestor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CapTableInvestorService);
//# sourceMappingURL=capinvestor.service.js.map