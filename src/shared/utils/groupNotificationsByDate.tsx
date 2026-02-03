import { isThisWeek, isToday, isYesterday } from "date-fns";
import { INotification } from "../types/notification";

type NotificationGroup = "today" | "yesterday" | "thisWeek" | "earlier";

export function groupNotificationsByDate(
    notifications: INotification[],
): Record<NotificationGroup, INotification[]> {
    return notifications.reduce(
        (groups, notification) => {
            const date = notification.createdAt;
            if (isToday(date)) {
                groups.today.push(notification);
            } else if (isYesterday(date)) {
                groups.yesterday.push(notification);
            } else if (isThisWeek(date, { weekStartsOn: 1 })) {
                groups.thisWeek.push(notification);
            } else {
                groups.earlier.push(notification);
            }

            return groups;
        },
        {
            today: [],
            yesterday: [],
            thisWeek: [],
            earlier: [],
        },
    );
}
