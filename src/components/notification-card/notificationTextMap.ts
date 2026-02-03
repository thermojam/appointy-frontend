import { NotificationType } from "@/shared/types/notification";

export const notificationTextMap: Record<
    NotificationType,
    (authorName: string) => string
> = {
    LIKE: (name) => `${name} поставил(а) лайк`,
    COMMENT: (name) => `${name} оставил(а) комментарий`,
    REVIEW: (name) => `${name} оставил(а) отзыв`,
    FAVORITE_MASTER: (name) => `${name} добавил(а) вас в избранное`,
    APPOINTMENT_CREATED: (name) => `${name} ждет подтверждения записи`,
    APPOINTMENT_CONFIRMED: (name) => `${name} подтвердил(а) запись`,
    APPOINTMENT_CANCELLED: (name) => `${name} отменил(а) запись`,
    APPOINTMENT_COMPLETED: (name) => `${name} завершил(а) запись`,
};
