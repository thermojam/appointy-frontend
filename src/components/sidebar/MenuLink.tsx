import Link from "next/link";
import { Badge } from "./Badge";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import clsx from "clsx";

interface MenuLinkProps {
    title: string;
    href: string;
    icon: IconName;
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
                <DynamicIcon name={icon} />
                <span className="text-md font-semibold">{title}</span>
            </div>
            {badge && <Badge number={badge} />}
        </Link>
    );
}
