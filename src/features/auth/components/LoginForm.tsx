'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useLogin } from '../hooks/useAuth';
import { FormField, Title, Subtitle } from '@/components/ui';
import { LoginDto } from '../api/auth.api';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const loginSchema = yup.object({
    username: yup.string().required('Введите логин'),
    password: yup.string().required('Введите пароль'),
});

type LoginFormValues = yup.InferType<typeof loginSchema>;

export function LoginForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: yupResolver(loginSchema),
    });
    const { mutate: login, isPending, isError } = useLogin();

    const onSubmit = (data: LoginFormValues) => {
        login(data as LoginDto, {
            onSuccess: () => {
                router.push('/');
            },
        });
    };

    return (
        <div className="flex w-full flex-col items-center justify-center px-4 text-center">
            <div className="w-full max-w-md rounded-[40px] border bg-[rgb(var(--surface))] border-[rgb(var(--border))] shadow-xl">
                <div className="p-6 text-center sm:p-10">
                    <Title className="mb-1 text-xl">С возвращением!</Title>
                    <Subtitle className="mb-6 text-sm">Рады видеть вас снова!</Subtitle>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
                        <FormField<LoginFormValues>
                            name="username"
                            placeholder="Логин"
                            register={register}
                            errors={errors}
                        />
                        <FormField<LoginFormValues>
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            register={register}
                            errors={errors}
                        />

                        <button
                            type="submit"
                            disabled={isPending}
                            className="h-[52px] mt-6 w-full rounded-[16px] bg-[rgb(var(--button-bg))] text-[rgb(var(--button-text))] transition hover:opacity-90 disabled:opacity-50"
                        >
                            {isPending ? 'Вход...' : 'Войти'}
                        </button>

                        {isError && (
                            <div className="h-5 pt-1 text-left">
                                <p className="text-sm text-red-500">Неверный логин или пароль</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
