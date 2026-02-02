import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    NextMonthButtonProps,
    PreviousMonthButtonProps,
} from "react-day-picker";

export const NextMonthButton = (props: NextMonthButtonProps) => {
    return (
        <button {...props} className="hover:cursor-pointer">
            <ChevronRight />
        </button>
    );
};

export const PreviousMonthButton = (props: PreviousMonthButtonProps) => {
    return (
        <button {...props} className="hover:cursor-pointer">
            <ChevronLeft />
        </button>
    );
};
