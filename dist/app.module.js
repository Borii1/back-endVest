"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./entities/user.entity");
const user_module_1 = require("./module/user.module");
const startup_entity_1 = require("./entities/businessprofileentities/startup.entity");
const investor_entity_1 = require("./entities/businessprofileentities/investor.entity");
const startup_module_1 = require("./module/businessprofilemodule/startup.module");
const investor_module_1 = require("./module/businessprofilemodule/investor.module");
const funding_entity_1 = require("./entities/financialentities/funding.entity");
const funding_module_1 = require("./module/financialmodule/funding.module");
const profilepicture_module_1 = require("./module/profilepicturemodule/profilepicture.module");
const profilepicture_entity_1 = require("./entities/profilepictureentities/profilepicture.entity");
const capInvestor_entity_1 = require("./entities/financialentities/capInvestor.entity");
const activity_module_1 = require("./module/activitymodule/activity.module");
const activity_entity_1 = require("./entities/activityentities/activity.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                url: process.env.MYSQL_URL,
                host: process.env.MYSQL_HOST,
                port: +process.env.MYSQL_PORT,
                username: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE,
                entities: [user_entity_1.User, startup_entity_1.Startup, investor_entity_1.Investor, funding_entity_1.FundingRound, profilepicture_entity_1.ProfilePicture, capInvestor_entity_1.CapTableInvestor, activity_entity_1.Activity],
                synchronize: true,
            }),
            profilepicture_module_1.ProfilePictureModule,
            user_module_1.UsersModule,
            startup_module_1.StartupModule,
            investor_module_1.InvestorModule,
            funding_module_1.FundingModule,
            activity_module_1.ActivityModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map