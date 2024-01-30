import { BaseModel } from "./base.model";

export interface StaffModel extends BaseModel {
    login: string;
    password?: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    phone: string;
    last_seen?: Date;
    role_id: number;
    organization_id: number;
}  