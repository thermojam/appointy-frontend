'use client';

import {CheckCircle, Plus, CalendarClock, Share2, Search, User, ArrowLeft, MoveRight} from 'lucide-react';

interface StepCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

const StepCard = ({icon: Icon, title, description}: StepCardProps) => (
    <div className="flex items-start p-4 rounded-lg border border-border bg-surface">
        <Icon className="h-6 w-6 mr-4 text-secondary"/>
        <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-secondary">{description}</p>
        </div>
    </div>
);

interface OnboardingCompletionProps {
    role: 'master' | 'client';
    onRedirect: () => void;
    onBack: () => void;
}

export const OnboardingCompletion = ({role, onRedirect, onBack}: OnboardingCompletionProps) => {
    const masterSteps = [
        {
            icon: Plus,
            title: 'Добавьте услуги',
            description: 'Создайте список услуг, чтобы клиенты могли записываться к вам онлайн.'
        },
        {
            icon: CalendarClock,
            title: 'Добавьте график работы',
            description: 'Настройте рабочие дни и доступное время, чтобы клиенты видели, когда можно записаться.'
        },
        {
            icon: Share2,
            title: 'Поделитесь аккаунтом со знакомыми',
            description: 'Отправьте ссылку на ваш профиль друзьям и первым клиентам, чтобы быстрее получить записи и отзывы.'
        },
    ];

    const clientSteps = [
        {
            icon: Search,
            title: 'Поиск мастеров и услуг',
            description: 'Найдите подходящего мастера по услуге, району или рейтингу и выберите удобное время для записи.'
        },
        {
            icon: User,
            title: 'Просмотр профиля',
            description: 'Проверяйте и при необходимости дополняйте данные профиля, чтобы мастер мог легко с вами связаться.'
        },
        {
            icon: Share2,
            title: 'Поделитесь аккаунтом со знакомыми',
            description: 'Пригласите друзей и близких, чтобы они тоже могли удобно записываться к мастерам.'
        },
    ];

    const steps = role === 'master' ? masterSteps : clientSteps;
    const subtitle = role === 'master'
        ? 'Ваш профиль активен и готов к приему заказов'
        : 'Теперь вы можете искать мастеров и записываться на услуги.';

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
            <div className="w-full max-w-lg">

                <div
                    className="w-full rounded-[40px] border bg-[rgb(var(--surface))] border-[rgb(var(--border))] shadow-xl">
                    <div className="p-6 sm:p-10">
                        <main className="flex flex-col items-center text-center">
                            <CheckCircle className="h-12 w-12 text-green-500 mb-4"/>
                            <h1 className="text-3xl font-bold text-foreground mb-2">Аккаунт создан!</h1>
                            <p className="text-secondary mb-8 max-w-sm">{subtitle}</p>

                            <div className="w-full text-left">
                                <h2 className="text-lg font-semibold text-foreground mb-4">Рекомендуемые следующие
                                    шаги</h2>
                                <div className="space-y-4">
                                    {steps.map((step, index) => (
                                        <StepCard key={index} {...step} />
                                    ))}
                                </div>
                            </div>
                        </main>

                        <footer className="mt-10 flex justify-between items-center">
                            <button onClick={onBack}
                                    className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                                <ArrowLeft className="h-4 w-4 mr-2"/>
                                Назад
                            </button>
                            <button
                                onClick={onRedirect}
                                className="h-[52px] px-8 rounded-[16px] bg-primary text-primary-foreground transition hover:opacity-90 flex items-center justify-center"
                            >
                                Завершить
                                <MoveRight className="h-4 w-4 ml-2"/>
                            </button>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};
