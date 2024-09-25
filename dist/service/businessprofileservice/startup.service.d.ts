import { Repository } from 'typeorm';
import { Startup } from 'src/entities/businessprofileentities/startup.entity';
export declare class StartupService {
    private startupsRepository;
    constructor(startupsRepository: Repository<Startup>);
    findOne(id: number): Promise<Startup>;
    create(userId: number, startupData: Startup): Promise<Startup>;
    findAllStartups(): Promise<Startup[]>;
    findAll(userId: number): Promise<Startup[]>;
    update(id: number, startupData: Partial<Startup>): Promise<Startup>;
    softDelete(id: number): Promise<void>;
}
