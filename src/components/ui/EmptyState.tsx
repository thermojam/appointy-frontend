import { ReactNode } from "react";

interface EmptyStateProps {
    title: string;
    description: string;
    icon: ReactNode;
}

export function EmptyState({ title, description, icon }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="flex items-center justify-center rounded-lg bg-neutral-200 size-15 p-2 mb-6">
                {icon}
            </div>
            <p className="text-2xl mb-4 font-bold">{title}</p>
            <p className="text-sm text-neutral-500 text-center text-pretty ">
                {description}
            </p>
        </div>
    );
}
