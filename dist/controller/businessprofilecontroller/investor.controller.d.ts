import { InvestorService } from 'src/service/businessprofileservice/investor.service';
import { Investor } from 'src/entities/businessprofileentities/investor.entity';
import { UserService } from 'src/service/user.service';
export declare class InvestorsController {
    private readonly investorService;
    private readonly userService;
    constructor(investorService: InvestorService, userService: UserService);
    private getUserIdFromToken;
    create(request: Request, investorData: Investor): Promise<any>;
    findAllCreatedUser(request: Request): Promise<Investor[]>;
    findAllInvestors(): Promise<Investor[]>;
    getInvestorIds(userId: number): Promise<number[]>;
    getInvestorsByIds(ids: string): Promise<Investor[]>;
    findByIds(ids: number[]): Promise<Investor[]>;
    findOne(id: string): Promise<Investor>;
    update(id: number, investorData: Investor): Promise<Investor>;
    softDelete(id: number): Promise<void>;
}
