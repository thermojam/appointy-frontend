interface DashboardHeaderProps {
    title: string;
    description: string;
}

export function DashboardHeader({ title, description }: DashboardHeaderProps) {
    return (
        <header className="py-8 pr-8 sticky top-0 space-y-1 bg-white z-10">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-neutral-500">{description}</p>
        </header>
    );
}
