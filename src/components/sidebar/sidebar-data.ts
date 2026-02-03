import { PagesConfig } from "@/shared/configs/pagesConfig";
import {
    Bell,
    BriefcaseBusiness,
    CalendarClock,
    House,
    Image,
    List,
    LucideIcon,
    Settings,
    Star,
} from "lucide-react";

export const sidebarMenu: Array<{
    title: string;
    href: string;
    icon: LucideIcon;
}> = [
    {
        title: "Главная",
        href: PagesConfig.MAIN,
        icon: House,
    },
    {
        title: "Записи",
        href: PagesConfig.APPOINTMENTS,
        icon: List,
    },
    {
        title: "Услуги",
        href: PagesConfig.SERVICES,
        icon: BriefcaseBusiness,
    },
    {
        title: "Расписание",
        href: PagesConfig.SCHEDULE,
        icon: CalendarClock,
    },
    {
        title: "Уведомления",
        href: PagesConfig.NOTIFICATIONS,
        icon: Bell,
    },
    {
        title: "Галерея",
        href: PagesConfig.GALLERY,
        icon: Image,
    },
    {
        title: "Отзывы",
        href: PagesConfig.REVIEWS,
        icon: Star,
    },
    {
        title: "Настройки",
        href: PagesConfig.SETTINGS,
        icon: Settings,
    },
];
