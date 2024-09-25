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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const startup_entity_1 = require("./businessprofileentities/startup.entity");
const investor_entity_1 = require("./businessprofileentities/investor.entity");
const profilepicture_entity_1 = require("./profilepictureentities/profilepicture.entity");
const activity_entity_1 = require("./activityentities/activity.entity");
const capInvestor_entity_1 = require("./financialentities/capInvestor.entity");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], User.prototype, "contactNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => startup_entity_1.Startup, startup => startup.user),
    __metadata("design:type", Array)
], User.prototype, "startups", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => investor_entity_1.Investor, investor => investor.user),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", investor_entity_1.Investor)
], User.prototype, "investor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => profilepicture_entity_1.ProfilePicture, profilePicture => profilePicture.user),
    __metadata("design:type", profilepicture_entity_1.ProfilePicture)
], User.prototype, "profilePicture", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => activity_entity_1.Activity, activities => activities.user),
    __metadata("design:type", activity_entity_1.Activity)
], User.prototype, "activities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => capInvestor_entity_1.CapTableInvestor, capTableInvestor => capTableInvestor.user),
    __metadata("design:type", capInvestor_entity_1.CapTableInvestor)
], User.prototype, "capTableInvestor", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map