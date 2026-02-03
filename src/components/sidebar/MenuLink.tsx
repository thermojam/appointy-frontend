import Link from "next/link";
import { Badge } from "./Badge";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";

interface MenuLinkProps {
    title: string;
    href: string;
    icon: LucideIcon;
    badge?: number;
    isActive?: boolean;
}

export function MenuLink({
    title,
    href,
    icon,
    badge,
    isActive = false,
}: MenuLinkProps) {
    const Icon = icon;
    return (
        <Link
            href={href}
            className={clsx(
                "flex py-4 px-3 rounded-lg ",
                isActive
                    ? "bg-neutral-100 text-neutral-900"
                    : "text-neutral-500",
            )}
        >
            <div className="flex gap-2 grow pr-2 ">
                <Icon />
                <span className="text-md font-semibold">{title}</span>
            </div>
            {badge && <Badge number={badge} />}
        </Link>
    );
}
