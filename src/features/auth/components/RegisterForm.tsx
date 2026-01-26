'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useRegister } from '../hooks/useAuth';
import { FormField, Title, Subtitle } from '@/components/ui';
import { RegisterDto } from '../api/auth.api';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema, RegisterFormValues } from '../schemas/register.schema';
import { RoleSelector } from './RoleSelector';
import { GoogleButton } from './GoogleButton';

export function RegisterForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: yupResolver(registerSchema),
    });
    const { mutate: registerUser, isPending } = useRegister();
    const role = watch('role');

    const onSubmit = (data: RegisterFormValues) => {
        const { username, password, role } = data;
        const registerData: RegisterDto = { username, password, role };
        registerUser(registerData, {
            onSuccess: () => {
                router.push(`/onboarding/${data.role}`);
            },
        });
    };

    return (
        <div className="flex w-full flex-col items-center justify-center px-4 text-center">
            <div className="mb-10 max-w-4xl">
                <Title className="mb-8 text-2xl leading-tight md:text-3xl">
                    Приложение объединяет мастеров и клиентов в одном месте
                </Title>
                <Subtitle>
                    Маникюр, педикюр, уходовые процедуры — всё доступно в несколько кликов, без звонков, переписок и
                    ожиданий ответа
                    <br />
                    Выбирайте мастера, смотрите свободные окна, записывайтесь в удобное время и управляйте своими
                    визитами прямо в приложении
                    <br />
                    Пройдите быструю регистрацию, чтобы оформить первую запись и открыть доступ ко всем возможностям
                    Appointy
                    <br />
                    Красота должна быть удобной — мы сделали именно так
                </Subtitle>
            </div>

            <div className="w-full max-w-md rounded-[40px] border bg-[rgb(var(--surface))] border-[rgb(var(--border))] shadow-xl">
                <div className="p-6 text-center sm:p-10">
                    <Title className="mb-1 text-xl">Создать аккаунт!</Title>
                    <Subtitle className="mb-6 text-sm">Пара деталей — и доступ открыт!</Subtitle>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
                        <FormField<RegisterFormValues>
                            name="username"
                            placeholder="Имя пользователя"
                            register={register}
                            errors={errors}
                        />
                        <FormField<RegisterFormValues>
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            register={register}
                            errors={errors}
                        />
                        <FormField<RegisterFormValues>
                            name="passwordConfirm"
                            type="password"
                            placeholder="Подтверждение пароля"
                            register={register}
                            errors={errors}
                        />

                        <RoleSelector value={role} onChange={(r) => setValue('role', r)} />

                        <button
                            type="submit"
                            disabled={isPending}
                            className="h-[52px] w-full mt-6 rounded-[16px] bg-[rgb(var(--button-bg))] text-[rgb(var(--button-text))] transition hover:opacity-90 disabled:opacity-50"
                        >
                            {isPending ? 'Регистрация...' : 'Регистрация'}
                        </button>
                    </form>

                    <div className="my-6 text-center text-xs text-[rgb(var(--secondary))]">или</div>

                    <GoogleButton />
                </div>
            </div>
        </div>
    );
}
