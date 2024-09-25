import { CapTableInvestorService } from 'src/service/financialservice/capinvestor.service';
export declare class CapTableInvestorController {
    private readonly capTableInvestorService;
    constructor(capTableInvestorService: CapTableInvestorService);
    private getUserIdFromToken;
    findAll(request: Request): Promise<import("../../entities/financialentities/capInvestor.entity").CapTableInvestor[]>;
    getInvestorInformation(capTableId: number): Promise<import("../../entities/financialentities/capInvestor.entity").CapTableInvestor[]>;
    getTopInvestorByCapTable(request: Request): Promise<{
        topInvestorName: string;
        totalInvestment: number;
    } | {
        message: string;
    }>;
    removeInvestor(investorId: number, capTableId: number): Promise<void>;
}
