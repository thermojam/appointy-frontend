import { IUser } from "./user";

export interface INotification {
    id: string;
    createdAt: string;
    updatedAt: string;

    authorId: string;
    author?: IUser;
    recipientId: string;
    type: NotificationType;
    targetId: string;
    targetType: TargetType;
    isRead: boolean;
}

export type NotificationType =
    | "LIKE"
    | "COMMENT"
    | "REVIEW"
    | "FAVORITE_MASTER"
    | "APPOINTMENT_CREATED"
    | "APPOINTMENT_CONFIRMED"
    | "APPOINTMENT_CANCELLED"
    | "APPOINTMENT_COMPLETED";

export type TargetType = "MASTER" | "SERVICE" | "COMMENT" | "APPOINTMENT";
