import { TAppointmentStatus } from "@/shared/types/appointment";
import clsx from "clsx";
import { Check, Flag, Loader, LucideIcon, X } from "lucide-react";

const badges: Record<
    TAppointmentStatus,
    { icon: LucideIcon; textColor: string; bgColor: string }
> = {
    PENDING: {
        icon: Loader,
        textColor: "text-yellow-800 ",
        bgColor: "bg-amber-100",
    },
    CONFIRMED: {
        icon: Check,
        textColor: "text-green-600",
        bgColor: "bg-green-200",
    },
    CANCELLED: { icon: X, textColor: "text-red-700", bgColor: "bg-red-200" },
    COMPLETED: {
        icon: Flag,
        textColor: "text-neutral-800",
        bgColor: "bg-neutral-200",
    },
};

interface StatusBadgeProps {
    status: TAppointmentStatus;
    className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
    const Icon = badges[status].icon;

    return (
        <div
            className={clsx(
                "rounded-lg p-1 w-7 h-7 flex items-center justify-center  ",
                badges[status].textColor,
                badges[status].bgColor,
                className,
            )}
        >
            <Icon />
        </div>
    );
}
