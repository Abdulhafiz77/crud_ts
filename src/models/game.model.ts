import { BaseModel } from "./base.model";

export interface GameModel extends BaseModel {
 name: string,
 discription: string | null,
 version: number
}