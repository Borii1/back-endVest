import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(userData: User): Promise<User>;
    validateUser(email: string, password: string): Promise<User | null>;
    isEmailRegistered(email: string): Promise<boolean>;
    findById(id: number): Promise<User>;
    update(id: number, userData: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
}
