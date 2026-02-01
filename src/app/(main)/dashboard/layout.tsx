import { Sidebar } from "@/components/sidebar/Sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full flex flex-col min-h-screen bg-background text-foreground px-8 pb-8 gap-0">
                {children}
            </div>
        </div>
    );
}
