import { DashboardHeader } from "@/components/dashboard-header/DashboardHeader";

export default function DashboardMainPage() {
    return (
        <>
            <DashboardHeader
                title="С возвращением, Анна!"
                description="Вот краткий обзор вашего бизнеса на сегодня:"
            />
            <main>content</main>
        </>
    );
}
