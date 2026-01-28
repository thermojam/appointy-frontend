'use client';

import {useState, useRef, useMemo, Suspense, useCallback} from 'react';
import {useSearchParams, useRouter} from 'next/navigation';
import {Step1_BaseInfo, Step1Ref} from '@/features/onboarding/components/Step1_BaseInfo';
import {Step2_Workplace, Step2Ref as Step2MasterRef} from '@/features/onboarding/components/Step2_Workplace';
import {Step3_About, Step3Ref as Step3MasterRef} from '@/features/onboarding/components/Step3_About';
import {Step4_BookingRules, Step4Ref as Step4MasterRef} from '@/features/onboarding/components/Step4_BookingRules';
import {OnboardingCompletion} from '@/features/onboarding/components/OnboardingCompletion';
import {Step2_Interests, Step2Ref as Step2ClientRef} from '@/features/onboarding/components/Step2_Interests';
import {BaseInfoFormValues} from '@/features/onboarding/schemas/step1.schema';
import {WorkplaceFormValues} from '@/features/onboarding/schemas/step2.schema';
import {AboutFormValues} from '@/features/onboarding/schemas/step3.schema';
import {BookingRulesFormValues} from '@/features/onboarding/schemas/step4.schema';
import {InterestsFormValues} from '@/features/onboarding/schemas/step2_interests.schema';

import {useUpdateMasterProfile} from '@/features/onboarding/hooks/useUpdateMasterProfile';

interface OnboardingLayoutProps {
    title: string;
    subtitle: string;
    step: number;
    totalSteps: number;
    children: React.ReactNode;
    onNext: () => void;
    onBack: () => void;
    isNextDisabled?: boolean;
    isPending?: boolean;
}

const OnboardingLayout = ({
                              title,
                              subtitle,
                              step,
                              totalSteps,
                              children,
                              onNext,
                              onBack,
                              isNextDisabled,
                              isPending
                          }: OnboardingLayoutProps) => {
    return (
        <div className="flex min-h-screen w-full justify-center bg-background p-4">
            <div className="w-full max-w-4xl">
                <header>
                    <div className="flex justify-between items-baseline mb-4">
                        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
                        <span className="text-sm text-secondary whitespace-nowrap">ШАГ {step} ИЗ {totalSteps}</span>
                    </div>
                    <p className="text-secondary mb-8">{subtitle}</p>
                </header>

                <div
                    className="w-full rounded-[40px] border bg-[rgb(var(--surface))] border-[rgb(var(--border))] shadow-xl">
                    <div className="p-6 sm:p-10">
                        <main>
                            <div className="space-y-6">{children}</div>
                        </main>
                        <footer className="mt-10 flex justify-between items-center">
                            <button onClick={onBack} disabled={step === 1 || isPending}
                                    className="text-sm font-medium transition-colors hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed">
                                &lt; Назад
                            </button>
                            <button
                                onClick={onNext}
                                disabled={isNextDisabled || isPending}
                                className="h-[52px] px-8 rounded-[16px] bg-primary text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
                            >
                                {isPending ? 'Завершение...' : (step === totalSteps ? 'Завершить' : 'Продолжить')}
                            </button>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

type OnboardingData = BaseInfoFormValues &
    WorkplaceFormValues &
    AboutFormValues &
    BookingRulesFormValues &
    InterestsFormValues;


export default function OnboardingPageWrapper() {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <OnboardingPage/>
        </Suspense>
    );
}

function OnboardingPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const roleParam = searchParams.get('role');
    const role: 'master' | 'client' = roleParam === 'master' ? 'master' : 'client';

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<Partial<OnboardingData>>({});

    const {mutate: updateMasterProfile, isPending} = useUpdateMasterProfile();

    const step1Ref = useRef<Step1Ref>(null);
    const step2MasterRef = useRef<Step2MasterRef>(null);
    const step3MasterRef = useRef<Step3MasterRef>(null);
    const step4MasterRef = useRef<Step4MasterRef>(null);
    const step2ClientRef = useRef<Step2ClientRef>(null);

    const totalSteps = role === 'master' ? 4 : 2;

    const handleNext = () => {
        if (step > totalSteps) return;
        const masterTriggers = {1: step1Ref, 2: step2MasterRef, 3: step3MasterRef, 4: step4MasterRef};
        const clientTriggers = {1: step1Ref, 2: step2ClientRef};
        const triggerMap = role === 'master' ? masterTriggers : clientTriggers;
        triggerMap[step as keyof typeof triggerMap]?.current?.triggerSubmit();
    };

    const handleBack = () => {
        if (step > 1) setStep(prev => prev - 1);
    };

    type StepData = Partial<OnboardingData>;

    const handleStepValid = useCallback((data: StepData) => {
        const newFormData = {...formData, ...data};
        setFormData(newFormData);

        if (step < totalSteps) {
            setStep(prev => prev + 1);
        } else {
            if (role === 'master') {
                updateMasterProfile(newFormData, {
                    onSuccess: () => {
                        console.log('Профиль успешно сохранен. Показываем экран завершения.');
                        setStep(prev => prev + 1);
                    },
                    onError: (error) => {
                        console.error('Ошибка при сохранении профиля:', error);
                    },
                });
            } else if (role === 'client') {
                console.log('СИМУЛЯЦИЯ: Сохранение данных клиента...', newFormData);
                setTimeout(() => {
                    setStep(prev => prev + 1);
                }, 1000);
            }
        }
    }, [formData, step, totalSteps, role, updateMasterProfile, router]);

    const steps = useMemo(() => ({
        master: {
            1: {
                title: 'Основная информация',
                subtitle: 'Эта информация будет видна клиентам',
                component: <Step1_BaseInfo ref={step1Ref} role={role} onValid={handleStepValid} initialData={formData}/>
            },
            2: {
                title: 'Место работы',
                subtitle: 'Расскажите, где клиенты могут найти Вас.',
                component: <Step2_Workplace ref={step2MasterRef} onValid={handleStepValid} initialData={formData}/>
            },
            3: {
                title: 'О себе',
                subtitle: 'Расскажите подробную информацию о своих профессиональных качествах.',
                component: <Step3_About ref={step3MasterRef} onValid={handleStepValid} initialData={formData}/>
            },
            4: {
                title: 'Правила бронирования',
                subtitle: 'Настройте, как клиенты могут записываться и отменять прием.',
                component: <Step4_BookingRules ref={step4MasterRef} onValid={handleStepValid} initialData={formData}/>
            },
        },
        client: {
            1: {
                title: 'Основная информация',
                subtitle: 'Эта информация будет видна клиентам',
                component: <Step1_BaseInfo ref={step1Ref} role={role} onValid={handleStepValid} initialData={formData}/>
            },
            2: {
                title: 'В чем Вы заинтересованы?',
                subtitle: 'Выберите услуги, которые вы хотели бы попробовать',
                component: <Step2_Interests ref={step2ClientRef} onValid={handleStepValid} initialData={formData}/>
            },
        }
    }), [role, handleStepValid, formData]);

    if (step > totalSteps) {
        return (
            <OnboardingCompletion
                role={role}
                onRedirect={() => router.push(role === 'master' ? '/dashboard' : '/')}
                onBack={handleBack}
            />
        );
    }

    const currentStepData = role === 'master'
        ? steps.master[step as keyof typeof steps.master]
        : steps.client[step as keyof typeof steps.client];

    if (!currentStepData) return <div>Загрузка или неверная роль...</div>;

    return (
        <OnboardingLayout
            title={currentStepData.title}
            subtitle={currentStepData.subtitle}
            step={step}
            totalSteps={totalSteps}
            onNext={handleNext}
            onBack={handleBack}
            isPending={isPending}
        >
            {currentStepData.component}
        </OnboardingLayout>
    );
}
