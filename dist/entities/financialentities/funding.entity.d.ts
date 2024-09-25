import { Startup } from '../businessprofileentities/startup.entity';
import { Investor } from '../businessprofileentities/investor.entity';
import { CapTableInvestor } from './capInvestor.entity';
export declare class FundingRound {
    id: number;
    fundingType: string;
    announcedDate: string;
    closedDate: string;
    targetFunding: number;
    preMoneyValuation: number;
    moneyRaisedCurrency: string;
    minimumShare: number;
    isDeleted: boolean;
    createdAt: Date;
    startup: Startup;
    investors: Investor[];
    moneyRaised: number;
    capTableInvestors: CapTableInvestor[];
}
