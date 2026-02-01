import { Calendar, Flag, User, XSquare } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { IAppointment } from "@/shared/types/appointment";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ru } from "date-fns/locale";
import { Button } from "../ui/Button";

interface MasterAppointementCardProps {
    appointment: IAppointment;
}

export function MasterAppointementCard({
    appointment,
}: MasterAppointementCardProps) {
    return (
        <div className="w-full relative border border-neutral-300 rounded-2xl p-4 flex flex-col gap-4">
            <StatusBadge
                status={appointment.status}
                className="absolute right-4 top-4"
            />
            <div className="space-y-1">
                <div className="flex gap-2 items-center">
                    <User className="size-5" />
                    <p className="font-bold">{appointment.clientId}</p>
                </div>
                <p className="text-sm text-neutral-500">
                    {appointment.clientId}
                </p>
            </div>
            <div className="space-y-1">
                <p className="text-neutral-500 text-sm">service anme</p>
                <div className="text-neutral-500 flex items-center gap-2">
                    <Calendar className="size-5" />
                    <time className=" text-sm">
                        {parseISO(appointment.startTime).toLocaleString("ru", {
                            day: "2-digit",
                            month: "long",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </time>
                </div>
            </div>
            <p className="text-neutral-400 text-xs">
                {formatDistanceToNow(parseISO(appointment.createdAt), {
                    locale: ru,
                    addSuffix: true,
                })}
            </p>
            <div className="flex gap-2">
                <Button variant="danger" className="flex-1">
                    <XSquare className="size-5" /> Отменить
                </Button>

                <Button className="flex-1">
                    <Flag className="size-5" />
                    Завершить
                </Button>
            </div>
        </div>
    );
}
