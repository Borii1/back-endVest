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
exports.InvestorsController = void 0;
const common_1 = require("@nestjs/common");
const investor_service_1 = require("../../service/businessprofileservice/investor.service");
const investor_entity_1 = require("../../entities/businessprofileentities/investor.entity");
const jwt = require("jsonwebtoken");
const user_service_1 = require("../../service/user.service");
let InvestorsController = class InvestorsController {
    constructor(investorService, userService) {
        this.investorService = investorService;
        this.userService = userService;
    }
    getUserIdFromToken(authorizationHeader) {
        if (!authorizationHeader) {
            throw new common_1.UnauthorizedException('Authorization header is required');
        }
        const token = authorizationHeader.replace('Bearer ', '');
        const payload = jwt.verify(token, 'secretKey');
        return payload.userId;
    }
    async create(request, investorData) {
        const userId = this.getUserIdFromToken(request.headers['authorization']);
        await this.investorService.create(userId, investorData);
        return { message: 'Investor created successfully' };
    }
    findAllCreatedUser(request) {
        const userId = this.getUserIdFromToken(request.headers['authorization']);
        return this.investorService.findAllCreatedUser(userId);
    }
    async findAllInvestors() {
        return this.investorService.findAllInvestors();
    }
    async getInvestorIds(userId) {
        return this.investorService.getInvestorIds(userId);
    }
    async getInvestorsByIds(ids) {
        const idArray = ids.split(',').map(id => parseInt(id, 10));
        return this.investorService.findByIds(idArray);
    }
    findByIds(ids) {
        return this.investorService.findByIds(ids);
    }
    async findOne(id) {
        return this.investorService.findOne(Number(id));
    }
    async update(id, investorData) {
        return this.investorService.update(Number(id), investorData);
    }
    async softDelete(id) {
        return this.investorService.softDelete(Number(id));
    }
};
exports.InvestorsController = InvestorsController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, investor_entity_1.Investor]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], InvestorsController.prototype, "findAllCreatedUser", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "findAllInvestors", null);
__decorate([
    (0, common_1.Get)(':userId/ids'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "getInvestorIds", null);
__decorate([
    (0, common_1.Get)('by-ids'),
    __param(0, (0, common_1.Query)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "getInvestorsByIds", null);
__decorate([
    (0, common_1.Get)(':ids'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], InvestorsController.prototype, "findByIds", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, investor_entity_1.Investor]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/delete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InvestorsController.prototype, "softDelete", null);
exports.InvestorsController = InvestorsController = __decorate([
    (0, common_1.Controller)('investors'),
    __metadata("design:paramtypes", [investor_service_1.InvestorService,
        user_service_1.UserService])
], InvestorsController);
//# sourceMappingURL=investor.controller.js.map