/// <reference types="multer" />
import { ProfilePictureService } from 'src/service/profilepictureservice/profilepicture.service';
import { Response } from 'express';
export declare class ProfilePictureController {
    private readonly profilePictureService;
    constructor(profilePictureService: ProfilePictureService);
    uploadProfilePicture(userId: number, file: Express.Multer.File): Promise<void>;
    getProfilePicture(userId: number, res: Response): Promise<void>;
    updateProfilePicture(userId: number, file: Express.Multer.File, res: Response): Promise<void>;
    uploadStartupProfilePicture(startupId: number, file: Express.Multer.File): Promise<void>;
    uploadInvestorProfilePicture(investorId: number, file: Express.Multer.File): Promise<void>;
    getStartupProfilePicture(startupId: number, res: Response): Promise<void>;
    getInvestorProfilePicture(investorId: number, res: Response): Promise<void>;
    updateStartupProfilePicture(startupId: number, file: Express.Multer.File, res: Response): Promise<void>;
    updateInvestorProfilePicture(investorId: number, file: Express.Multer.File, res: Response): Promise<void>;
}
