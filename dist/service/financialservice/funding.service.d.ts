import { Repository } from 'typeorm';
import { FundingRound } from 'src/entities/financialentities/funding.entity';
import { InvestorService } from '../businessprofileservice/investor.service';
import { CapTableInvestor } from 'src/entities/financialentities/capInvestor.entity';
import { ActivityService } from '../activityservice/activity.service';
export interface InvestorData {
    id: number;
    name: string;
    title: string;
    shares: number;
    totalShares: number;
    percentage: number;
    totalInvestment: number;
}
export declare class FundingRoundService {
    private readonly fundingRoundRepository;
    private readonly investorService;
    private readonly capTableInvestorRepository;
    private readonly activityService;
    private readonly logger;
    constructor(fundingRoundRepository: Repository<FundingRound>, investorService: InvestorService, capTableInvestorRepository: Repository<CapTableInvestor>, activityService: ActivityService);
    create(fundingId: number, fundingRoundData: FundingRound, investorIds: number[], investorShares: number[], investorTitles: string[], userId: number): Promise<FundingRound>;
    findById(id: number): Promise<FundingRound>;
    findAll(): Promise<FundingRound[]>;
    update(id: number, updateData: Partial<FundingRound>, investorData: {
        id: number;
        shares: number;
        title: string;
        totalInvestment: number;
    }[], userId: number): Promise<FundingRound>;
    softDelete(id: number): Promise<void>;
    getTotalMoneyRaisedForStartup(startupId: number): Promise<number>;
    getTotalSharesForInvestor(investorId: number, companyId: number): Promise<number>;
    getAllInvestorsDataOfAllTheCompany(companyId: number): Promise<InvestorData[]>;
    getAllInvestorDataByEachCompany(companyId: number): Promise<InvestorData[]>;
    getTotalMonthlyFunding(userId: number, year: number): Promise<any>;
    getTotalMonthlyFundingByCompany(companyId: number, year: number): Promise<any>;
}
