interface DashboardHeaderProps {
    title: string;
    description: string;
}

export function DashboardHeader({ title, description }: DashboardHeaderProps) {
    return (
        <header className="space-y-1">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-neutral-500">{description}</p>
        </header>
    );
}
