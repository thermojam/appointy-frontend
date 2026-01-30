import { PagesConfig } from "@/shared/configs/pagesConfig";
import { dynamicIconImports } from "lucide-react/dynamic";

export const sidebarMenu: Array<{
    title: string;
    href: string;
    icon: keyof typeof dynamicIconImports;
}> = [
    {
        title: "Главная",
        href: PagesConfig.MAIN,
        icon: "house",
    },
    {
        title: "Записи",
        href: PagesConfig.APPOINTMENTS,
        icon: "list",
    },
    {
        title: "Услуги",
        href: PagesConfig.SERVICES,
        icon: "briefcase-business",
    },
    {
        title: "Расписание",
        href: PagesConfig.SCHEDULE,
        icon: "calendar-clock",
    },
    {
        title: "Уведомления",
        href: PagesConfig.NOTIFICATIONS,
        icon: "bell",
    },
    {
        title: "Галерея",
        href: PagesConfig.GALLERY,
        icon: "image",
    },
    {
        title: "Отзывы",
        href: PagesConfig.REVIEWS,
        icon: "star",
    },
    {
        title: "Настройки",
        href: PagesConfig.SETTINGS,
        icon: "settings",
    },
];
