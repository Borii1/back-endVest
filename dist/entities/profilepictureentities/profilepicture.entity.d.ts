/// <reference types="node" />
import { User } from '../user.entity';
import { Startup } from '../businessprofileentities/startup.entity';
import { Investor } from '../businessprofileentities/investor.entity';
export declare class ProfilePicture {
    id: number;
    data: Buffer;
    user: User;
    startup: Startup;
    investor: Investor;
    contentType: string;
}
