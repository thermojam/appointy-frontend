import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type TButtonVariants =
    | "primary"
    | "secondary"
    | "positive"
    | "warning"
    | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: TButtonVariants;
}

const buttonStyles: Record<TButtonVariants, string> = {
    primary: "bg-neutral-900 text-neutral-50",
    secondary: "bg-neutral-100 text-neutral-900",
    positive: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
};

const baseButtonStyles =
    "flex gap-2 items-center justify-center rounded-lg py-1 px-2";

export function Button({
    variant = "primary",
    children,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx(baseButtonStyles, buttonStyles[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
