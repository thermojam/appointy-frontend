import { DashboardMain } from "@/components/dashboard-main/DashboardMain";
import { MasterServiceCard } from "@/components/master-service-card/MasterServiceCard";
import { services } from "@/shared/mock/services";

export default function DashboardServicesPage() {
    return (
        <DashboardMain
            title="Услуги"
            description="Управляйте услугами, которые Вы предлагаете клиентам. Клиенты будут видеть только активные услуги."
        >
            <main>
                <ul className="space-y-4">
                    {services.map((service) => (
                        <li key={service.id}>
                            <MasterServiceCard service={service} />
                        </li>
                    ))}
                </ul>
            </main>
        </DashboardMain>
    );
}
