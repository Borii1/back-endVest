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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../service/user.service");
const user_entity_1 = require("../entities/user.entity");
const jsonwebtoken_1 = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(userData) {
        const { email } = userData;
        const isEmailRegistered = await this.userService.isEmailRegistered(email);
        if (isEmailRegistered) {
            throw new Error('Email already registered');
        }
        await this.userService.create(userData);
    }
    findAll() {
        return 'This action returns all users';
    }
    async login(loginData) {
        const user = await this.userService.validateUser(loginData.email, loginData.password);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const jwt = (0, jsonwebtoken_1.sign)({ userId: user.id }, 'secretKey');
        return { message: 'Login successful', jwt, userId: user.id };
    }
    async checkEmail({ email }) {
        const isEmailRegistered = await this.userService.isEmailRegistered(email);
        return { exists: isEmailRegistered };
    }
    async getProfile(request) {
        const userId = this.getUserIdFromToken(request.headers['authorization']);
        const user = await this.userService.findById(userId);
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    async update(userId, userData) {
        const existingUser = await this.userService.findById(Number(userId));
        if (!existingUser) {
            throw new common_1.NotFoundException('User not found');
        }
        const updatedUser = await this.userService.update(Number(userId), userData);
        return updatedUser;
    }
    getUserIdFromToken(authorizationHeader) {
        console.log('Authorization Header:', authorizationHeader);
        if (!authorizationHeader) {
            throw new common_1.UnauthorizedException('Authorization header is required');
        }
        const token = authorizationHeader.replace('Bearer ', '');
        console.log('Token:', token);
        const payload = jwt.verify(token, 'secretKey');
        console.log('Payload:', payload);
        return payload.userId;
    }
    async findAllUsers() {
        return this.userService.findAll();
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('check-email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "checkEmail", null);
__decorate([
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllUsers", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersController);
//# sourceMappingURL=user.controller.js.map