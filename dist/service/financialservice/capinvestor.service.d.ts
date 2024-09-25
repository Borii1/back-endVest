import { Repository } from 'typeorm';
import { CapTableInvestor } from 'src/entities/financialentities/capInvestor.entity';
export declare class CapTableInvestorService {
    private readonly capTableInvestorRepository;
    constructor(capTableInvestorRepository: Repository<CapTableInvestor>);
    getInvestorInformation(capTableId: number): Promise<CapTableInvestor[]>;
    findAll(userId: number): Promise<CapTableInvestor[]>;
    findOne(id: number): Promise<CapTableInvestor>;
    findTopInvestorByUser(userId: number): Promise<{
        topInvestorName: string;
        totalInvestment: number;
    } | null>;
    removeInvestor(investorId: number, capTableId: number): Promise<void>;
}
