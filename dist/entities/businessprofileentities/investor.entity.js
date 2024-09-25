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
exports.Investor = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user.entity");
const funding_entity_1 = require("../financialentities/funding.entity");
const profilepicture_entity_1 = require("../profilepictureentities/profilepicture.entity");
const capInvestor_entity_1 = require("../financialentities/capInvestor.entity");
let Investor = class Investor {
    setIdFromUser() {
        console.log('Setting investor id from user id:', this.user.id);
        this.id = this.user.id;
    }
};
exports.Investor = Investor;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Investor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "emailAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "contactInformation", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1000 }),
    __metadata("design:type", String)
], Investor.prototype, "biography", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "streetAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "postalCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "facebook", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "twitter", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "instagram", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Investor.prototype, "linkedIn", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Investor.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => funding_entity_1.FundingRound),
    __metadata("design:type", Array)
], Investor.prototype, "fundingRounds", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => capInvestor_entity_1.CapTableInvestor, capTableInvestor => capTableInvestor.investor),
    __metadata("design:type", Array)
], Investor.prototype, "capTableInvestors", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Investor.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profilepicture_entity_1.ProfilePicture, (profilePicture) => profilePicture.investor),
    __metadata("design:type", profilepicture_entity_1.ProfilePicture)
], Investor.prototype, "profilePicture", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Investor.prototype, "setIdFromUser", null);
exports.Investor = Investor = __decorate([
    (0, typeorm_1.Entity)()
], Investor);
//# sourceMappingURL=investor.entity.js.map