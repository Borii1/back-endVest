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
exports.ProfilePictureController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const profilepicture_service_1 = require("../../service/profilepictureservice/profilepicture.service");
let ProfilePictureController = class ProfilePictureController {
    constructor(profilePictureService) {
        this.profilePictureService = profilePictureService;
    }
    async uploadProfilePicture(userId, file) {
        const pictureData = file.buffer;
        await this.profilePictureService.addProfilePicture(userId, pictureData);
    }
    async getProfilePicture(userId, res) {
        const profilePicture = await this.profilePictureService.findProfilePicture(userId);
        if (profilePicture) {
            res.set('Content-Type', 'image/jpeg');
            res.send(profilePicture.data);
        }
        else {
            res.status(404).send('Profile picture not found');
        }
    }
    async updateProfilePicture(userId, file, res) {
        const pictureData = file.buffer;
        try {
            const updatedProfilePicture = await this.profilePictureService.updateProfilePicture(userId, pictureData);
            res.json(updatedProfilePicture);
        }
        catch (error) {
            res.status(500).send('Error updating profile picture');
        }
    }
    async uploadStartupProfilePicture(startupId, file) {
        const pictureData = file.buffer;
        await this.profilePictureService.addProfilePictureToStartup(startupId, pictureData);
    }
    async uploadInvestorProfilePicture(investorId, file) {
        const pictureData = file.buffer;
        await this.profilePictureService.addProfilePictureToInvestor(investorId, pictureData);
    }
    async getStartupProfilePicture(startupId, res) {
        const profilePicture = await this.profilePictureService.findProfilePictureForStartup(startupId);
        if (profilePicture) {
            res.set('Content-Type', profilePicture.contentType || 'image/jpeg');
            res.send(profilePicture.data);
        }
        else {
            res.status(204).send();
        }
    }
    async getInvestorProfilePicture(investorId, res) {
        const profilePicture = await this.profilePictureService.findProfilePictureForInvestor(investorId);
        if (profilePicture) {
            res.set('Content-Type', profilePicture.contentType || 'image/jpeg');
            res.send(profilePicture.data);
        }
        else {
            res.status(204).send();
        }
    }
    async updateStartupProfilePicture(startupId, file, res) {
        try {
            const pictureData = file.buffer;
            const updatedProfilePicture = await this.profilePictureService.updateProfilePictureToStartup(startupId, pictureData);
            res.json(updatedProfilePicture);
        }
        catch (error) {
            res.status(500).send('Error updating profile picture');
        }
    }
    async updateInvestorProfilePicture(investorId, file, res) {
        try {
            const pictureData = file.buffer;
            const updatedProfilePicture = await this.profilePictureService.updateProfilePictureToInvestor(investorId, pictureData);
            res.json(updatedProfilePicture);
        }
        catch (error) {
            res.status(500).send('Error updating profile picture');
        }
    }
};
exports.ProfilePictureController = ProfilePictureController;
__decorate([
    (0, common_1.Post)(':userId/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProfilePictureController.prototype, "uploadProfilePicture", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProfilePictureController.prototype, "getProfilePicture", null);
__decorate([
    (0, common_1.Put)(':userId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], ProfilePictureController.prototype, "updateProfilePicture", null);
__decorate([
    (0, common_1.Post)('startup/:startupId/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('startupId')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProfilePictureController.prototype, "uploadStartupProfilePicture", null);
__decorate([
    (0, common_1.Post)('investor/:investorId/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProfilePictureController.prototype, "uploadInvestorProfilePicture", null);
__decorate([
    (0, common_1.Get)('startup/:startupId'),
    __param(0, (0, common_1.Param)('startupId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProfilePictureController.prototype, "getStartupProfilePicture", null);
__decorate([
    (0, common_1.Get)('investor/:investorId'),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProfilePictureController.prototype, "getInvestorProfilePicture", null);
__decorate([
    (0, common_1.Put)('startup/:startupId/update'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('startupId')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], ProfilePictureController.prototype, "updateStartupProfilePicture", null);
__decorate([
    (0, common_1.Put)('investor/:investorId/update'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('investorId')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], ProfilePictureController.prototype, "updateInvestorProfilePicture", null);
exports.ProfilePictureController = ProfilePictureController = __decorate([
    (0, common_1.Controller)('profile-picture'),
    __metadata("design:paramtypes", [profilepicture_service_1.ProfilePictureService])
], ProfilePictureController);
//# sourceMappingURL=profilepicture.controller.js.map