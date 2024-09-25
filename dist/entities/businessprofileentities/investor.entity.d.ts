import { User } from 'src/entities/user.entity';
import { FundingRound } from '../financialentities/funding.entity';
import { ProfilePicture } from '../profilepictureentities/profilepicture.entity';
import { CapTableInvestor } from '../financialentities/capInvestor.entity';
export declare class Investor {
    id: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    contactInformation: string;
    gender: string;
    biography: string;
    streetAddress: string;
    country: string;
    city: string;
    state: string;
    postalCode: string;
    website: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedIn: string;
    isDeleted: boolean;
    fundingRounds: FundingRound[];
    capTableInvestors: CapTableInvestor[];
    user: User;
    profilePicture: ProfilePicture;
    setIdFromUser(): void;
}
