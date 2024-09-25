"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePictureModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const profilepicture_controller_1 = require("../../controller/profilepicturecontroller/profilepicture.controller");
const profilepicture_entity_1 = require("../../entities/profilepictureentities/profilepicture.entity");
const profilepicture_service_1 = require("../../service/profilepictureservice/profilepicture.service");
let ProfilePictureModule = class ProfilePictureModule {
};
exports.ProfilePictureModule = ProfilePictureModule;
exports.ProfilePictureModule = ProfilePictureModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([profilepicture_entity_1.ProfilePicture])],
        controllers: [profilepicture_controller_1.ProfilePictureController],
        providers: [profilepicture_service_1.ProfilePictureService],
        exports: [profilepicture_service_1.ProfilePictureService],
    })
], ProfilePictureModule);
//# sourceMappingURL=profilepicture.module.js.map