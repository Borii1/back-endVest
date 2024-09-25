import { Activity } from 'src/entities/activityentities/activity.entity';
import { Repository } from 'typeorm';
export declare class ActivityService {
    private activityRepository;
    constructor(activityRepository: Repository<Activity>);
    createActivity(userId: number, recentData: Activity): Promise<Activity>;
    findAll(userId: number): Promise<Activity[]>;
    findOne(id: number): Promise<Activity>;
}
