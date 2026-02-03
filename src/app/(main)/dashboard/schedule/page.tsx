"use client";

import { Calendar } from "@/components/calendar/Calendar";
import { DashboardMain } from "@/components/dashboard-main/DashboardMain";
import { ScheduleBlock } from "@/components/schedule-block/ScheduleBlock";
import { useState } from "react";

export default function DashboardSchedulePage() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();

    return (
        <DashboardMain
            title="Расписание"
            description="Настраивайте рабочий график и управляйте доступным временем для записи клиентов."
        >
            <div className="flex gap-4 items-start">
                <Calendar
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
                <ScheduleBlock selectedDate={selectedDate} />
            </div>
        </DashboardMain>
    );
}
