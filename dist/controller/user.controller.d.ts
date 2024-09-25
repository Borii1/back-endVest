import { UserService } from 'src/service/user.service';
import { User } from 'src/entities/user.entity';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    create(userData: User): Promise<void>;
    findAll(): string;
    login(loginData: {
        email: string;
        password: string;
    }): Promise<any>;
    checkEmail({ email }: {
        email: string;
    }): Promise<{
        exists: boolean;
    }>;
    getProfile(request: Request): Promise<User>;
    update(userId: string, userData: User): Promise<User>;
    private getUserIdFromToken;
    findAllUsers(): Promise<User[]>;
}
