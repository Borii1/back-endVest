import { StartupService } from 'src/service/businessprofileservice/startup.service';
import { Startup } from 'src/entities/businessprofileentities/startup.entity';
import { UserService } from 'src/service/user.service';
export declare class StartupsController {
    private readonly startupService;
    private readonly userService;
    constructor(startupService: StartupService, userService: UserService);
    private getUserIdFromToken;
    create(request: Request, startupData: Startup): Promise<any>;
    findAll(request: Request): Promise<Startup[]>;
    findAllStartups(): Promise<Startup[]>;
    update(id: number, startupData: Startup): Promise<Startup>;
    softDelete(id: number): Promise<void>;
}
