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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Startup = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user.entity");
const funding_entity_1 = require("../financialentities/funding.entity");
const profilepicture_entity_1 = require("../profilepictureentities/profilepicture.entity");
let Startup = class Startup {
};
exports.Startup = Startup;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Startup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "companyName", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "companyDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "foundedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "typeOfCompany", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "numberOfEmployees", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "contactEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "streetAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "postalCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "industry", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "facebook", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "twitter", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "instagram", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Startup.prototype, "linkedIn", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => funding_entity_1.FundingRound, fundingRound => fundingRound.startup),
    __metadata("design:type", Array)
], Startup.prototype, "fundingRounds", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Startup.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.startups),
    __metadata("design:type", user_entity_1.User)
], Startup.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profilepicture_entity_1.ProfilePicture, (profilePicture) => profilePicture.startup),
    __metadata("design:type", profilepicture_entity_1.ProfilePicture)
], Startup.prototype, "profilePicture", void 0);
exports.Startup = Startup = __decorate([
    (0, typeorm_1.Entity)()
], Startup);
//# sourceMappingURL=startup.entity.js.map