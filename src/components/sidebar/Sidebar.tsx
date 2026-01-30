"use client";

import { sidebarMenu } from "./sidebar-data";
import { usePathname } from "next/navigation";
import { Logo } from "../header/Logo";
import { LogOut } from "lucide-react";
import { MenuLink } from "./MenuLink";
import { Avatar } from "../ui/Avatar";

const isActivePage = (pathname: string, pageHref: string) => {
    return pathname.startsWith(pageHref);
};

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="flex flex-col w-2xs">
            <div className="flex items-center justify-center border-r border-neutral-200 p-4">
                <Logo />
            </div>
            <nav className="grow border-y border-r border-neutral-200 p-4">
                <ul>
                    {sidebarMenu.map((item) => (
                        <li key={item.href}>
                            <MenuLink
                                title={item.title}
                                href={item.href}
                                icon={item.icon}
                                isActive={isActivePage(pathname, item.href)}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex gap-2 p-4 border-r border-neutral-200">
                <Avatar names={{ firstName: "A" }} />
                <div className="grow">
                    <p className="font-semibold">Анна</p>
                    <p className="text-xs text-neutral-500">anna-nickname</p>
                </div>
                <button className="border border-neutral-200 text-neutral-500 rounded-lg flex items-center justify-center w-12 h-12 ">
                    <LogOut />
                </button>
            </div>
        </aside>
    );
}
