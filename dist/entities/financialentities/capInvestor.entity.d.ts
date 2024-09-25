import { Investor } from '../businessprofileentities/investor.entity';
import { FundingRound } from './funding.entity';
import { User } from '../user.entity';
export declare class CapTableInvestor {
    id: number;
    capTable: FundingRound;
    investor: Investor;
    title: string;
    shares: number;
    totalInvestment: number;
    isDeleted: boolean;
    investorRemoved: boolean;
    user: User;
}
