import { FundingRoundService } from 'src/service/financialservice/funding.service';
import { FundingRound } from 'src/entities/financialentities/funding.entity';
import { StartupService } from 'src/service/businessprofileservice/startup.service';
import { UserService } from 'src/service/user.service';
import { Investor } from 'src/entities/businessprofileentities/investor.entity';
import { InvestorService } from 'src/service/businessprofileservice/investor.service';
import { InvestorData } from 'src/service/financialservice/funding.service';
export declare class FundingRoundController {
    private readonly startupService;
    private readonly userService;
    private readonly investorService;
    private readonly fundingRoundService;
    private readonly logger;
    constructor(startupService: StartupService, userService: UserService, investorService: InvestorService, fundingRoundService: FundingRoundService);
    private getUserIdFromToken;
    getInvestorsByIds(ids: string): Promise<Investor[]>;
    createFundingRound(request: Request, fundingRoundData: Partial<FundingRound>, investors: Investor[], shares: number[], titles: string[], userId: number): Promise<FundingRound>;
    findAll(): Promise<FundingRound[]>;
    findById(id: number): Promise<FundingRound>;
    updateFundingRound(id: number, body: {
        updateData: Partial<FundingRound>;
        investors: {
            id: number;
            shares: number;
            title: string;
            totalInvestment: number;
        }[];
    }, request: Request): Promise<FundingRound>;
    softDeleteFundingRound(id: number): Promise<void>;
    getTotalMoneyRaisedForStartup(startupId: number): Promise<{
        totalMoneyRaised: number;
    }>;
    getTotalSharesForInvestor(investorId: number, companyId: number): Promise<number>;
    getAllInvestorsDataOfAllTheCompany(companyId: number): Promise<InvestorData[]>;
    getAllInvestorDataByEachCompany(companyId: number): Promise<InvestorData[]>;
    getMonthlyFunding(userId: number, year: number): Promise<any>;
    getCompanyMonthlyFunding(companyId: number, year: number): Promise<any>;
}
