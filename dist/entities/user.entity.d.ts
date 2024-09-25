import { Startup } from 'src/entities/businessprofileentities/startup.entity';
import { Investor } from './businessprofileentities/investor.entity';
import { ProfilePicture } from './profilepictureentities/profilepicture.entity';
import { Activity } from './activityentities/activity.entity';
import { CapTableInvestor } from './financialentities/capInvestor.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    gender: string;
    password?: string;
    startups: Startup[];
    investor: Investor;
    profilePicture: ProfilePicture;
    activities: Activity;
    capTableInvestor: CapTableInvestor;
}
