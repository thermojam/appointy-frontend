import { IClient } from "./client";
import { IMaster } from "./master";

export interface IUser {
    id: string;
    createdAt: string;
    updatedAt: string;

    username: string;
    email: string;
    tokenVersion: number;
    phone: string;
    firstName: string;
    lastName: string;
    middleName: string;
    avatarUrl: string;

    master?: IMaster;
    client?: IClient;
}
