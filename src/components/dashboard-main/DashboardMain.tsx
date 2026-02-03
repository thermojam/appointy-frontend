import { ReactNode } from "react";
import { DashboardHeader } from "../dashboard-header/DashboardHeader";

interface DashboardMainProps {
    title: string;
    description: string;
    children: ReactNode;
}

export function DashboardMain({
    title,
    description,
    children,
}: DashboardMainProps) {
    return (
        <main className="w-full flex flex-col min-h-screen bg-background text-foreground px-8 pb-8 gap-0">
            <DashboardHeader title={title} description={description} />
            {children}
        </main>
    );
}
