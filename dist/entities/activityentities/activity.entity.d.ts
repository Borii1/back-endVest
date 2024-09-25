import { User } from '../user.entity';
export declare class Activity {
    id: number;
    action: string;
    details: string;
    timestamp: Date;
    user: User;
}
