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
exports.CapTableInvestorController = void 0;
const common_1 = require("@nestjs/common");
const capinvestor_service_1 = require("../../service/financialservice/capinvestor.service");
const jwt = require("jsonwebtoken");
let CapTableInvestorController = class CapTableInvestorController {
    constructor(capTableInvestorService) {
        this.capTableInvestorService = capTableInvestorService;
    }
    getUserIdFromToken(authorizationHeader) {
        if (!authorizationHeader) {
            throw new common_1.UnauthorizedException('Authorization header is required');
        }
        const token = authorizationHeader.replace('Bearer ', '');
        const payload = jwt.verify(token, 'secretKey');
        return payload.userId;
    }
    findAll(request) {
        const userId = this.getUserIdFromToken(request.headers['authorization']);
        return this.capTableInvestorService.findAll(userId);
    }
    async getInvestorInformation(capTableId) {
        return this.capTableInvestorService.getInvestorInformation(capTableId);
    }
    async getTopInvestorByCapTable(request) {
        const userId = this.getUserIdFromToken(request.headers['authorization']);
        const topInvestor = await this.capTableInvestorService.findTopInvestorByUser(userId);
        if (!topInvestor) {
            return { message: 'No investors found' };
        }
        return topInvestor;
    }
    async removeInvestor(investorId, capTableId) {
        await this.capTableInvestorService.removeInvestor(investorId, capTableId);
    }
};
exports.CapTableInvestorController = CapTableInvestorController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], CapTableInvestorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':capTableId'),
    __param(0, (0, common_1.Param)('capTableId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CapTableInvestorController.prototype, "getInvestorInformation", null);
__decorate([
    (0, common_1.Get)(':userId/top'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], CapTableInvestorController.prototype, "getTopInvestorByCapTable", null);
__decorate([
    (0, common_1.Put)(':investorId/:capTableId'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Param)('capTableId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CapTableInvestorController.prototype, "removeInvestor", null);
exports.CapTableInvestorController = CapTableInvestorController = __decorate([
    (0, common_1.Controller)('cap-table-investor'),
    __metadata("design:paramtypes", [capinvestor_service_1.CapTableInvestorService])
], CapTableInvestorController);
//# sourceMappingURL=capinvestor.controller.js.map