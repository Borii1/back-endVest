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
exports.StartupsController = void 0;
const common_1 = require("@nestjs/common");
const startup_service_1 = require("../../service/businessprofileservice/startup.service");
const startup_entity_1 = require("../../entities/businessprofileentities/startup.entity");
const jwt = require("jsonwebtoken");
const user_service_1 = require("../../service/user.service");
let StartupsController = class StartupsController {
    constructor(startupService, userService) {
        this.startupService = startupService;
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
    async create(request, startupData) {
        const userId = this.getUserIdFromToken(request.headers['authorization']);
        await this.startupService.create(userId, startupData);
        return { message: 'Startup created successfully' };
    }
    findAll(request) {
        const userId = this.getUserIdFromToken(request.headers['authorization']);
        return this.startupService.findAll(userId);
    }
    async findAllStartups() {
        return this.startupService.findAllStartups();
    }
    async update(id, startupData) {
        return this.startupService.update(Number(id), startupData);
    }
    async softDelete(id) {
        return this.startupService.softDelete(Number(id));
    }
};
exports.StartupsController = StartupsController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request, startup_entity_1.Startup]),
    __metadata("design:returntype", Promise)
], StartupsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], StartupsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StartupsController.prototype, "findAllStartups", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, startup_entity_1.Startup]),
    __metadata("design:returntype", Promise)
], StartupsController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/delete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StartupsController.prototype, "softDelete", null);
exports.StartupsController = StartupsController = __decorate([
    (0, common_1.Controller)('startups'),
    __metadata("design:paramtypes", [startup_service_1.StartupService,
        user_service_1.UserService])
], StartupsController);
//# sourceMappingURL=startup.controller.js.map