'use client';

import {useRouter} from 'next/navigation';
import {useForm, Controller} from 'react-hook-form';
import {useRegister} from '../hooks/useAuth';
import {FormField, Title, Subtitle, RadioGroupField} from '@/components/ui';
import {RegisterDto, Role} from '../api/auth.api';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const registerSchema = yup.object({
    username: yup.string().required('Введите логин'),
    password: yup.string().min(6, 'Пароль должен быть не менее 6 символов').required('Введите пароль'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password')], 'Пароли должны совпадать')
        .required('Подтвердите пароль'),
    role: yup.string().oneOf(['client', 'master'] as const).required('Выберите роль'),
});

type RegisterFormValues = yup.InferType<typeof registerSchema>;

const roleOptions: { value: Role, label: string }[] = [
    {value: 'client', label: 'Я - клиент'},
    {value: 'master', label: 'Я - мастер'},
];

export function RegisterForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<RegisterFormValues>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            role: 'client',
        },
    });

    const {mutate: registerUser, isPending, isError} = useRegister();

    const onSubmit = (data: RegisterFormValues) => {
        const apiData: RegisterDto = {
            username: data.username,
            password: data.password,
        };

        registerUser(apiData, {
            onSuccess: () => {
                if (data.role === 'client') {
                    router.push('/onboarding/client');
                } else if (data.role === 'master') {
                    router.push('/onboarding/master');
                }
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
                    <br/>
                    Выбирайте мастера, смотрите свободные окна, записывайтесь в удобное время и управляйте своими
                    визитами прямо в приложении
                    <br/>
                    Пройдите быструю регистрацию, чтобы оформить первую запись и открыть доступ ко всем возможностям
                    Appointy
                    <br/>
                    Красота должна быть удобной — мы сделали именно так
                </Subtitle>
            </div>

            <div
                className="w-full max-w-md rounded-[40px] border bg-[rgb(var(--surface))] border-[rgb(var(--border))] shadow-xl">
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
                            name="passwordConfirmation"
                            type="password"
                            placeholder="Подтверждение пароля"
                            register={register}
                            errors={errors}
                        />

                        <Controller
                            name="role"
                            control={control}
                            render={({field}) => (
                                <RadioGroupField
                                    {...field}
                                    options={roleOptions}
                                />
                            )}
                        />
                        {errors.role && <p className="text-sm text-red-500">{errors.role.message}</p>}

                        <button
                            type="submit"
                            disabled={isPending}
                            className="h-[52px] mt-4 w-full rounded-[16px] bg-[rgb(var(--button-bg))] text-[rgb(var(--button-text))] transition hover:opacity-90 disabled:opacity-50"
                        >
                            {isPending ? 'Создание аккаунта...' : 'Регистрация'}
                        </button>

                        {isError && (
                            <div className="h-5 pt-1 text-left">
                                <p className="text-sm text-red-500">Ошибка регистрации. Возможно, логин занят.</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
