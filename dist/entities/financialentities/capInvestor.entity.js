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
exports.CapTableInvestor = void 0;
const typeorm_1 = require("typeorm");
const investor_entity_1 = require("../businessprofileentities/investor.entity");
const funding_entity_1 = require("./funding.entity");
const user_entity_1 = require("../user.entity");
let CapTableInvestor = class CapTableInvestor {
};
exports.CapTableInvestor = CapTableInvestor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CapTableInvestor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => funding_entity_1.FundingRound, (fundingRound) => fundingRound.capTableInvestors, { nullable: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'capTableId' }),
    __metadata("design:type", funding_entity_1.FundingRound)
], CapTableInvestor.prototype, "capTable", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => investor_entity_1.Investor, (investor) => investor.capTableInvestors, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'investorId' }),
    __metadata("design:type", investor_entity_1.Investor)
], CapTableInvestor.prototype, "investor", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], CapTableInvestor.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CapTableInvestor.prototype, "shares", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CapTableInvestor.prototype, "totalInvestment", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], CapTableInvestor.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], CapTableInvestor.prototype, "investorRemoved", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.capTableInvestor),
    __metadata("design:type", user_entity_1.User)
], CapTableInvestor.prototype, "user", void 0);
exports.CapTableInvestor = CapTableInvestor = __decorate([
    (0, typeorm_1.Entity)()
], CapTableInvestor);
//# sourceMappingURL=capInvestor.entity.js.map