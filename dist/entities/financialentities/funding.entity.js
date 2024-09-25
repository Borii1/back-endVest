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
exports.FundingRound = void 0;
const typeorm_1 = require("typeorm");
const startup_entity_1 = require("../businessprofileentities/startup.entity");
const investor_entity_1 = require("../businessprofileentities/investor.entity");
const capInvestor_entity_1 = require("./capInvestor.entity");
let FundingRound = class FundingRound {
};
exports.FundingRound = FundingRound;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FundingRound.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], FundingRound.prototype, "fundingType", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], FundingRound.prototype, "announcedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, nullable: true }),
    __metadata("design:type", String)
], FundingRound.prototype, "closedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 20, scale: 2 }),
    __metadata("design:type", Number)
], FundingRound.prototype, "targetFunding", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 20, scale: 2 }),
    __metadata("design:type", Number)
], FundingRound.prototype, "preMoneyValuation", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], FundingRound.prototype, "moneyRaisedCurrency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 20, scale: 2, default: 1 }),
    __metadata("design:type", Number)
], FundingRound.prototype, "minimumShare", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], FundingRound.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], FundingRound.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => startup_entity_1.Startup, startup => startup.fundingRounds),
    (0, typeorm_1.JoinColumn)({ name: 'startupId' }),
    __metadata("design:type", startup_entity_1.Startup)
], FundingRound.prototype, "startup", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => investor_entity_1.Investor),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], FundingRound.prototype, "investors", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], FundingRound.prototype, "moneyRaised", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => capInvestor_entity_1.CapTableInvestor, (capTableInvestor) => capTableInvestor.capTable),
    __metadata("design:type", Array)
], FundingRound.prototype, "capTableInvestors", void 0);
exports.FundingRound = FundingRound = __decorate([
    (0, typeorm_1.Entity)()
], FundingRound);
//# sourceMappingURL=funding.entity.js.map