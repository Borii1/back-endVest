import { ActivityService } from 'src/service/activityservice/activity.service';
import { Activity } from 'src/entities/activityentities/activity.entity';
export declare class ActivityController {
    private readonly activityService;
    constructor(activityService: ActivityService);
    private getUserIdFromToken;
    createActivity(request: Request, recentData: Activity): Promise<Activity>;
    findAll(request: Request): Promise<Activity[]>;
    findOne(id: string): Promise<Activity>;
}
