import { DashboardMain } from "@/components/dashboard-main/DashboardMain";
import { NotificationSection } from "@/components/notification-section/NotificationSection";
import { notifications } from "@/shared/mock/notifications";
import { groupNotificationsByDate } from "@/shared/utils/groupNotificationsByDate";

export default function Notifications() {
    const grouped = groupNotificationsByDate(notifications);

    return (
        <DashboardMain
            title="Уведомления"
            description="Просматривайте важные уведомления о новых записях и изменениях статусов."
        >
            <NotificationSection
                title="Сегодня"
                notifications={grouped.today}
            />

            <NotificationSection
                title="Вчера"
                notifications={grouped.yesterday}
                showAccurateTime
            />

            <NotificationSection
                title="На этой неделе"
                notifications={grouped.thisWeek}
                showAccurateTime
            />

            <NotificationSection
                title="Ранее"
                notifications={grouped.earlier}
                showAccurateTime
            />
        </DashboardMain>
    );
}
