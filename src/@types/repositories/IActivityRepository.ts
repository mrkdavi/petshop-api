import { Repository } from "typeorm";
import { Activity } from "../../models/Activity";

export interface IActivityRepository extends Repository<Activity> {}
