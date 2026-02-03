import { INotification } from "@/shared/types/notification";
import { NotificationCard } from "../notification-card/NotificationCard";

interface NotificationSectionProps {
    title: string;
    notifications: INotification[];
    showAccurateTime?: boolean;
}

export function NotificationSection({
    title,
    notifications,
    showAccurateTime = false,
}: NotificationSectionProps) {
    if (!notifications.length) return null;

    return (
        <section className="mb-4">
            <p className="font-bold text-xl mb-2">{title}</p>
            <ul className="space-y-2">
                {notifications.map((notification) => (
                    <li key={notification.id}>
                        <NotificationCard
                            notification={notification}
                            showAccurateTime={showAccurateTime}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}
