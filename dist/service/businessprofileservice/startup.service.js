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
exports.StartupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const startup_entity_1 = require("../../entities/businessprofileentities/startup.entity");
let StartupService = class StartupService {
    constructor(startupsRepository) {
        this.startupsRepository = startupsRepository;
    }
    async findOne(id) {
        return this.startupsRepository.findOne({ where: { id } });
    }
    async create(userId, startupData) {
        const startup = this.startupsRepository.create({ ...startupData, user: { id: userId } });
        return this.startupsRepository.save(startup);
    }
    async findAllStartups() {
        return this.startupsRepository.find({ where: { isDeleted: false } });
    }
    async findAll(userId) {
        return this.startupsRepository.find({ where: { user: { id: userId }, isDeleted: false } });
    }
    async update(id, startupData) {
        const existingStartup = await this.findOne(id);
        if (!existingStartup) {
            throw new common_1.NotFoundException('Startup not found');
        }
        const updatedStartup = await this.startupsRepository.save({ ...existingStartup, ...startupData });
        return updatedStartup;
    }
    async softDelete(id) {
        const existingStartup = await this.findOne(id);
        if (!existingStartup) {
            throw new common_1.NotFoundException('Startup not found');
        }
        await this.startupsRepository.update(id, { isDeleted: true });
    }
};
exports.StartupService = StartupService;
exports.StartupService = StartupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(startup_entity_1.Startup)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], StartupService);
//# sourceMappingURL=startup.service.js.map