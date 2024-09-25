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
exports.ProfilePicture = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user.entity");
const startup_entity_1 = require("../businessprofileentities/startup.entity");
const investor_entity_1 = require("../businessprofileentities/investor.entity");
let ProfilePicture = class ProfilePicture {
};
exports.ProfilePicture = ProfilePicture;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProfilePicture.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'mediumblob' }),
    __metadata("design:type", Buffer)
], ProfilePicture.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], ProfilePicture.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => startup_entity_1.Startup, (startup) => startup.profilePicture),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", startup_entity_1.Startup)
], ProfilePicture.prototype, "startup", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => investor_entity_1.Investor, (investor) => investor.profilePicture),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", investor_entity_1.Investor)
], ProfilePicture.prototype, "investor", void 0);
exports.ProfilePicture = ProfilePicture = __decorate([
    (0, typeorm_1.Entity)()
], ProfilePicture);
//# sourceMappingURL=profilepicture.entity.js.map