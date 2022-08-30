import { EntityRepository, Repository } from "typeorm";
import { IActivityRepository } from "../@types/repositories/IActivityRepository";
import { Activity } from "../models/Activity";

@EntityRepository(Activity)
export class ActivityRepository
extends Repository<Activity>
implements IActivityRepository {}
