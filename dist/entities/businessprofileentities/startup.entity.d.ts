import { User } from 'src/entities/user.entity';
import { FundingRound } from '../financialentities/funding.entity';
import { ProfilePicture } from '../profilepictureentities/profilepicture.entity';
export declare class Startup {
    id: number;
    companyName: string;
    companyDescription: string;
    foundedDate: string;
    typeOfCompany: string;
    numberOfEmployees: string;
    phoneNumber: string;
    contactEmail: string;
    streetAddress: string;
    country: string;
    city: string;
    state: string;
    postalCode: string;
    industry: string;
    website: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedIn: string;
    fundingRounds: FundingRound[];
    isDeleted: boolean;
    user: User;
    profilePicture: ProfilePicture;
}
