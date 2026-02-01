import { Sidebar } from "@/components/sidebar/Sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full flex flex-col min-h-screen bg-background text-foreground p-8 gap-8">
                {children}
            </div>
        </div>
    );
}
