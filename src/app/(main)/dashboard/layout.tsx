import { Sidebar } from "@/components/sidebar/Sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex ">
            <Sidebar />
            {children}
        </div>
    );
}
