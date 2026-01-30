export default function MasterDashboardPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8">
            <div className="w-full max-w-4xl text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Добро пожаловать в ваш Дашборд!
                </h1>
                <p className="text-lg text-secondary mb-8">
                    Это ваша панель управления. Отсюда вы сможете управлять
                    своим расписанием, услугами и клиентами.
                </p>
            </div>
        </div>
    );
}
