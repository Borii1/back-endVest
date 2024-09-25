"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundingModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const funding_service_1 = require("../../service/financialservice/funding.service");
const funding_entity_1 = require("../../entities/financialentities/funding.entity");
const startup_service_1 = require("../../service/businessprofileservice/startup.service");
const funding_controller_1 = require("../../controller/financialcontroller/funding.controller");
const startup_entity_1 = require("../../entities/businessprofileentities/startup.entity");
const investor_entity_1 = require("../../entities/businessprofileentities/investor.entity");
const user_service_1 = require("../../service/user.service");
const user_entity_1 = require("../../entities/user.entity");
const investor_service_1 = require("../../service/businessprofileservice/investor.service");
const capInvestor_entity_1 = require("../../entities/financialentities/capInvestor.entity");
const capinvestor_controller_1 = require("../../controller/financialcontroller/capinvestor.controller");
const capinvestor_service_1 = require("../../service/financialservice/capinvestor.service");
const activity_service_1 = require("../../service/activityservice/activity.service");
const activity_entity_1 = require("../../entities/activityentities/activity.entity");
let FundingModule = class FundingModule {
};
exports.FundingModule = FundingModule;
exports.FundingModule = FundingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([funding_entity_1.FundingRound, investor_entity_1.Investor, startup_entity_1.Startup, user_entity_1.User, capInvestor_entity_1.CapTableInvestor, activity_entity_1.Activity]),
        ],
        controllers: [funding_controller_1.FundingRoundController, capinvestor_controller_1.CapTableInvestorController],
        providers: [funding_service_1.FundingRoundService, startup_service_1.StartupService, user_service_1.UserService, investor_service_1.InvestorService, capinvestor_service_1.CapTableInvestorService, activity_service_1.ActivityService],
    })
], FundingModule);
//# sourceMappingURL=funding.module.js.map