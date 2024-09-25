/// <reference types="node" />
import { Repository } from 'typeorm';
import { ProfilePicture } from 'src/entities/profilepictureentities/profilepicture.entity';
export declare class ProfilePictureService {
    private profilePictureRepository;
    constructor(profilePictureRepository: Repository<ProfilePicture>);
    addProfilePicture(userId: number, pictureData: Buffer): Promise<ProfilePicture>;
    findProfilePicture(userId: number): Promise<ProfilePicture | undefined>;
    updateProfilePicture(userId: number, pictureData: Buffer): Promise<ProfilePicture>;
    addProfilePictureToStartup(startupId: number, pictureData: Buffer): Promise<ProfilePicture>;
    addProfilePictureToInvestor(investorId: number, pictureData: Buffer): Promise<ProfilePicture>;
    findProfilePictureForStartup(startupId: number): Promise<ProfilePicture | undefined>;
    findProfilePictureForInvestor(investorId: number): Promise<ProfilePicture | undefined>;
    updateProfilePictureToStartup(startupId: number, pictureData: Buffer): Promise<ProfilePicture>;
    updateProfilePictureToInvestor(investorId: number, pictureData: Buffer): Promise<ProfilePicture>;
}
