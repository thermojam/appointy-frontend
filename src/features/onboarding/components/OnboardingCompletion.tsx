'use client';

import { Logo } from '@/components/header/Logo';
import { ThemeToggle } from '@/components/header/ThemeToggle';
import { CheckCircle2, Search, User, Share2, Plus, Calendar, ArrowLeft, MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface NextStepCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

const NextStepCard = ({ icon: Icon, title, description }: NextStepCardProps) => {
    return (
        <div className="flex items-start gap-5 rounded-xl border border-border bg-surface p-5 text-left transition-all duration-200 hover:border-border-hover hover:shadow-sm">
            <div className="rounded-full bg-muted text-secondary p-2.5">
                <Icon size={22} />
            </div>
            <div>
                <h3 className="font-semibold text-foreground text-md mb-1">{title}</h3>
                <p className="text-sm text-secondary">{description}</p>
            </div>
        </div>
    );
};

const completionData = {
    master: {
        subtitle: 'Ваш профиль активен и готов к приему заказов',
        nextSteps: [
            { icon: Plus, title: 'Добавьте услуги', description: 'Создайте список услуг, чтобы клиенты могли записываться к вам онлайн.' },
            { icon: Calendar, title: 'Добавьте график работы', description: 'Настройте рабочие дни и доступное время, чтобы клиенты видели, когда можно записаться.' },
            { icon: Share2, title: 'Поделитесь аккаунтом со знакомыми', description: 'Отправьте ссылку на ваш профиль друзьям и первым клиентам, чтобы быстрее получить записи и отзывы.' },
        ]
    },
    client: {
        subtitle: 'Теперь вы можете искать мастеров и записываться на услуги.',
        nextSteps: [
            { icon: Search, title: 'Поиск мастеров и услуг', description: 'Найдите подходящего мастера по услуге, району или рейтингу и выберите удобное время для записи.' },
            { icon: User, title: 'Просмотр профиля', description: 'Проверьте и при необходимости дополните данные профиля, чтобы мастер мог легко с вами связаться.' },
            { icon: Share2, title: 'Поделитесь аккаунтом со знакомыми', description: 'Пригласите друзей и близких, чтобы они тоже могли удобно записываться к мастерам.' },
        ]
    }
};

interface OnboardingCompletionProps {
    role: 'master' | 'client';
    onBack: () => void;
}

export const OnboardingCompletion = ({ role, onBack }: OnboardingCompletionProps) => {
    const router = useRouter();
    const data = completionData[role];

    const handleComplete = () => {
        const finalPath = role === 'master' ? '/dashboard' : '/';
        router.push(finalPath);
    };

    return (
        <div className="flex min-h-screen w-full flex-col items-center bg-background px-4 py-8">
            <header className="w-full max-w-3xl mx-auto flex justify-between items-center mb-10">
                <Logo />
                <ThemeToggle />
            </header>

            <main className="flex flex-col items-center text-center w-full max-w-xl mx-auto">
                <CheckCircle2 size={48} className="text-green-500 mb-5" />
                <h1 className="text-3xl font-bold text-foreground mb-3">Аккаунт создан!</h1>
                <p className="text-secondary mb-12 max-w-md">{data.subtitle}</p>

                <div className="w-full text-left">
                    <h2 className="text-xl font-bold text-foreground mb-5">Рекомендуемые следующие шаги</h2>
                    <div className="space-y-4">
                        {data.nextSteps.map(step => (
                            <NextStepCard key={step.title} {...step} />
                        ))}
                    </div>
                </div>
            </main>

            <footer className="mt-12 w-full max-w-xl mx-auto flex justify-between items-center">
                <button onClick={onBack} className="text-sm font-medium transition-colors hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                    <ArrowLeft size={16}/>
                    <span>Назад</span>
                </button>
                <button
                    onClick={handleComplete}
                    className="h-[52px] px-8 rounded-[16px] bg-primary text-primary-foreground transition hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
                >
                    <span>Завершить</span>
                    <MoveRight size={20}/>
                </button>
            </footer>
        </div>
    );
};
