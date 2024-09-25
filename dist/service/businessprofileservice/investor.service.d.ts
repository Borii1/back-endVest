import { Repository } from 'typeorm';
import { Investor } from 'src/entities/businessprofileentities/investor.entity';
export declare class InvestorService {
    private investorsRepository;
    [x: string]: any;
    constructor(investorsRepository: Repository<Investor>);
    findByIds(ids: number[]): Promise<Investor[]>;
    findOne(id: number): Promise<Investor>;
    create(userId: number, investorData: Investor): Promise<Investor>;
    findAllCreatedUser(userId: number): Promise<Investor[]>;
    findAllInvestors(): Promise<Investor[]>;
    update(id: number, investorData: Partial<Investor>): Promise<Investor>;
    softDelete(id: number): Promise<void>;
}
