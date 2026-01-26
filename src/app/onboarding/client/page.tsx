'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui';

export default function ClientOnboardingPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 text-center">
            <div className="rounded-[40px] border bg-[rgb(var(--surface))] border-[rgb(var(--border))] p-8 shadow-xl">
                <h1 className="mb-4 text-2xl font-bold">Основная информация</h1>
                <p className="mb-8 text-sm text-[rgb(var(--secondary))] ">Эта информация будет видна вашим клиентам</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200">
                            {/* Placeholder for photo upload */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-image"
                            >
                                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                <circle cx="9" cy="9" r="2" />
                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="font-semibold">Фото профиля</h2>
                            <p className="text-sm text-[rgb(var(--secondary))]">
                                JPG, PNG или GIF. Максимальный размер - 5 МБ
                            </p>
                        </div>
                    </div>

                    <Input placeholder="Почта *" {...register('email')} />
                    <div className="flex space-x-4">
                        <Input placeholder="Фамилия *" {...register('lastName')} />
                        <Input placeholder="Имя *" {...register('firstName')} />
                    </div>
                    <Input placeholder="Отчество" {...register('middleName')} />
                    <Input placeholder="Город *" {...register('city')} />
                    <Input placeholder="Номер телефона" {...register('phoneNumber')} />

                    <button
                        type="submit"
                        className="h-[52px] w-full rounded-[16px] bg-[rgb(var(--button-bg))] text-[rgb(var(--button-text))] transition hover:opacity-90"
                    >
                        Продолжить
                    </button>
                </form>
            </div>
        </div>
    );
}
