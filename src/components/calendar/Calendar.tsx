"use client";

import { DayPicker } from "react-day-picker";
import { addDays } from "date-fns";
import { ru } from "react-day-picker/locale";
import { NextMonthButton, PreviousMonthButton } from "./MonthButtons";
const scheduleDates = [addDays(new Date(), 1)];

interface CalendarProps {
    selectedDate?: Date;
    setSelectedDate: (date: Date | undefined) => void;
}

export function Calendar({ selectedDate, setSelectedDate }: CalendarProps) {
    return (
        <div className="border border-neutral-300 rounded-lg p-4">
            <DayPicker
                components={{ NextMonthButton, PreviousMonthButton }}
                selected={selectedDate}
                onSelect={setSelectedDate}
                showWeekNumber={true}
                locale={ru}
                mode="single"
                modifiers={{
                    scheduled: scheduleDates,
                }}
                classNames={{
                    months: "relative",
                    month_caption: "mb-4 font-bold",
                    nav: "absolute right-0",
                    month_grid: "w-full",
                    day: "text-center p-0.5 ",
                    day_button:
                        "w-10 h-10 rounded-lg  hover:outline hover:outline-neutral-300 hover:cursor-pointer",
                    selected: "*:bg-neutral-900 *:text-neutral-50",
                    today: " *:outline *:outline-green-700 *:text-green-700",
                    disabled: "opacity-50",
                    weekday: "text-neutral-500 font-normal text-sm",
                    week_number: "text-neutral-400 font-normal text-xs pr-4",
                }}
                modifiersClassNames={{
                    scheduled: "*:bg-green-200",
                }}
            />
            <div className="flex gap-4 flex-wrap mt-6">
                <div className="flex gap-2 items-center">
                    <div className="rounded-lg bg-green-200 size-6" />{" "}
                    <p>Есть расписание</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="rounded-lg bg-neutral-900 size-6" />{" "}
                    <p>Выбранный день</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="rounded-lg border border-green-700 size-6" />{" "}
                    <p>Сегодня</p>
                </div>
            </div>
        </div>
    );
}
