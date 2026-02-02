import { CalendarDays } from "lucide-react";
import { EmptyState } from "../ui/EmptyState";

export function DateNotSelectedState() {
    return (
        <EmptyState
            title="Выберите дату"
            description="Чтобы настроить или посмотреть расписание, выберите дату в календаре."
            icon={<CalendarDays className="size-12 stroke-1" />}
        />
    );
}
