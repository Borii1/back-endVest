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
exports.ProfilePictureService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const profilepicture_entity_1 = require("../../entities/profilepictureentities/profilepicture.entity");
let ProfilePictureService = class ProfilePictureService {
    constructor(profilePictureRepository) {
        this.profilePictureRepository = profilePictureRepository;
    }
    async addProfilePicture(userId, pictureData) {
        const profilePicture = this.profilePictureRepository.create({
            data: pictureData,
            user: { id: userId },
        });
        return this.profilePictureRepository.save(profilePicture);
    }
    async findProfilePicture(userId) {
        return this.profilePictureRepository.findOne({ where: { user: { id: userId } } });
    }
    async updateProfilePicture(userId, pictureData) {
        let profilePicture = await this.profilePictureRepository.findOne({ where: { user: { id: userId } } });
        if (profilePicture) {
            profilePicture.data = pictureData;
        }
        else {
            profilePicture = this.profilePictureRepository.create({
                data: pictureData,
                user: { id: userId },
            });
        }
        return this.profilePictureRepository.save(profilePicture);
    }
    async addProfilePictureToStartup(startupId, pictureData) {
        let profilePicture = await this.profilePictureRepository.findOne({ where: { startup: { id: startupId } } });
        if (profilePicture) {
            profilePicture.data = pictureData;
        }
        else {
            profilePicture = this.profilePictureRepository.create({
                data: pictureData,
                startup: { id: startupId },
            });
        }
        return this.profilePictureRepository.save(profilePicture);
    }
    async addProfilePictureToInvestor(investorId, pictureData) {
        let profilePicture = await this.profilePictureRepository.findOne({ where: { investor: { id: investorId } } });
        if (profilePicture) {
            profilePicture.data = pictureData;
        }
        else {
            profilePicture = this.profilePictureRepository.create({
                data: pictureData,
                investor: { id: investorId },
            });
        }
        return this.profilePictureRepository.save(profilePicture);
    }
    async findProfilePictureForStartup(startupId) {
        return this.profilePictureRepository.findOne({ where: { startup: { id: startupId } } });
    }
    async findProfilePictureForInvestor(investorId) {
        return this.profilePictureRepository.findOne({ where: { investor: { id: investorId } } });
    }
    async updateProfilePictureToStartup(startupId, pictureData) {
        let profilePicture = await this.profilePictureRepository.findOne({ where: { startup: { id: startupId } } });
        if (profilePicture) {
            profilePicture.data = pictureData;
        }
        else {
            profilePicture = this.profilePictureRepository.create({
                data: pictureData,
                startup: { id: startupId },
            });
        }
        return this.profilePictureRepository.save(profilePicture);
    }
    async updateProfilePictureToInvestor(investorId, pictureData) {
        let profilePicture = await this.profilePictureRepository.findOne({ where: { investor: { id: investorId } } });
        if (profilePicture) {
            profilePicture.data = pictureData;
        }
        else {
            profilePicture = this.profilePictureRepository.create({
                data: pictureData,
                investor: { id: investorId },
            });
        }
        return this.profilePictureRepository.save(profilePicture);
    }
};
exports.ProfilePictureService = ProfilePictureService;
exports.ProfilePictureService = ProfilePictureService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profilepicture_entity_1.ProfilePicture)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProfilePictureService);
//# sourceMappingURL=profilepicture.service.js.map