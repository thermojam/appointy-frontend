import clsx from "clsx";
import { format, formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { Avatar } from "../ui/Avatar";
import { INotification } from "@/shared/types/notification";
import { notificationTextMap } from "./notificationTextMap";
import { NotificationIcon } from "./NotificationIcon";

interface NotificationCardProps {
    notification: INotification;
    showAccurateTime?: boolean;
}

export function NotificationCard({
    notification,
    showAccurateTime = false,
}: NotificationCardProps) {
    const { author, isRead, type, createdAt } = notification;
    const authorName =
        [author?.firstName, author?.lastName].filter(Boolean).join(" ") ||
        "Пользователь";

    return (
        <div
            className={clsx(
                "flex gap-2 p-2 border rounded-xl transition-colors",
                isRead && "border-neutral-200",
            )}
        >
            <div className="relative">
                <Avatar
                    names={{ firstName: author?.firstName?.[0] ?? "?" }}
                    size={12}
                />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-sm ">
                    <NotificationIcon type={type} />
                </div>
            </div>
            <div className="grow">
                <p className="text-neutral-500 text-sm">
                    <span className="text-neutral-900 font-medium">
                        {authorName}
                    </span>{" "}
                    {notificationTextMap[type]?.(authorName)
                        .replace(authorName, "")
                        .trim()}
                </p>

                {/* TARGET CONTENT */}

                <p className="text-neutral-400 text-xs mt-1">
                    {showAccurateTime
                        ? format(createdAt, "d MMM в H:mm", { locale: ru })
                        : formatDistanceToNow(createdAt, {
                              locale: ru,
                              addSuffix: true,
                          })}
                </p>
            </div>
        </div>
    );
}
