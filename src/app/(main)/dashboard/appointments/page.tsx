import { DashboardMain } from "@/components/dashboard-main/DashboardMain";
import { MasterAppointementCard } from "@/components/master-appointment-card/MasterAppointmentCard";
import { appointments } from "@/shared/mock/appointments";

export default function DashboardAppointmentsPage() {
    return (
        <DashboardMain
            title="Записи клиентов"
            description="Управляйте записями и статусами."
        >
            <ul className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
                {appointments.map((appointment) => (
                    <li key={appointment.id}>
                        <MasterAppointementCard appointment={appointment} />
                    </li>
                ))}
            </ul>
        </DashboardMain>
    );
}
