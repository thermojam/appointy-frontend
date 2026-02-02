import { DateNotSelectedState } from "./DateNotSelectedState";
import { Editor } from "./Editor";

interface ScheduleBlockProps {
    selectedDate?: Date;
}

export function ScheduleBlock({ selectedDate }: ScheduleBlockProps) {
    return (
        <div className="h-full flex-1 border border-neutral-300 rounded-lg p-4">
            {!selectedDate ? (
                <DateNotSelectedState />
            ) : (
                <Editor selectedDate={selectedDate} />
            )}
        </div>
    );
}
