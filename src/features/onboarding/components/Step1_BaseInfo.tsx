'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useImperativeHandle } from 'react';
import { baseInfoSchema, BaseInfoFormValues } from '../schemas/step1.schema';

const Input = (props: any) => <input {...props} className="border-border bg-surface text-foreground placeholder:text-secondary border p-3 rounded-lg w-full" />;
const ErrorMessage = ({ children }: { children?: React.ReactNode }) => <p className="text-red-500 text-sm mt-1">{children}</p>;
const Label = (props: any) => <label {...props} className="block text-base font-medium text-foreground mb-2" />;
const PhotoInput = () => <div className='w-full p-4 border border-dashed rounded-lg text-center text-secondary'>[Загрузка фото]</div>;
const TagInput = (props: any) => <Input {...props} />;

interface Step1BaseInfoProps {
    onValid: (data: BaseInfoFormValues) => void;
    initialData?: Partial<BaseInfoFormValues>;
    role: 'master' | 'client';
}

export interface Step1Ref {
    triggerSubmit: () => void;
}

export const Step1_BaseInfo = forwardRef<Step1Ref, Step1BaseInfoProps>(({ onValid, initialData, role }, ref) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<BaseInfoFormValues>({
        resolver: yupResolver(baseInfoSchema),
        defaultValues: {
            firstName: initialData?.firstName || '',
            lastName: initialData?.lastName || '',
            middleName: initialData?.middleName || '',
            email: initialData?.email || '',
            phone: initialData?.phone || '',
            city: initialData?.city || '',
            skills: initialData?.skills || [],
        }
    });

    useImperativeHandle(ref, () => ({
        triggerSubmit: handleSubmit(onValid)
    }));

    return (
        <form onSubmit={handleSubmit(onValid)} className="space-y-6">
            <div>
                <Label>Фото профиля</Label>
                <PhotoInput />
            </div>

            <div>
                <Label htmlFor="email">Почта</Label>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input {...field} id="email" placeholder="user@domain.com" />}
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Controller name="lastName" control={control} render={({ field }) => <Input {...field} id="lastName" placeholder="Иванова" />} />
                    <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
                </div>
                <div>
                    <Label htmlFor="firstName">Имя</Label>
                    <Controller name="firstName" control={control} render={({ field }) => <Input {...field} id="firstName" placeholder="Анна" />} />
                    <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
                </div>
            </div>

            <div>
                <Label htmlFor="middleName">Отчество</Label>
                <Controller name="middleName" control={control} render={({ field }) => <Input {...field} id="middleName" placeholder="Ивановна" />} />
                <ErrorMessage>{errors.middleName?.message}</ErrorMessage>
            </div>

            <div>
                <Label htmlFor="city">Город</Label>
                <Controller name="city" control={control} render={({ field }) => <Input {...field} id="city" placeholder="Санкт-Петербург" />} />
                <ErrorMessage>{errors.city?.message}</ErrorMessage>
            </div>

            <div>
                <Label htmlFor="phone">Номер телефона</Label>
                <Controller name="phone" control={control} render={({ field }) => <Input {...field} id="phone" placeholder="+7 (___) ___-__-__" />} />
                <ErrorMessage>{errors.phone?.message}</ErrorMessage>
            </div>

            <div>
                <Label htmlFor="skills">Навыки</Label>
                <Controller
                    name="skills"
                    control={control}
                    render={({ field }) => (
                        // Временная реализация для ввода навыков через запятую
                        <TagInput
                            {...field}
                            id="skills"
                            placeholder="Маникюр, Уход за кожей..."
                            value={Array.isArray(field.value) ? field.value.join(', ') : ''}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                        />
                    )}
                />
                <ErrorMessage>{errors.skills?.message}</ErrorMessage>
            </div>
        </form>
    )
});

Step1_BaseInfo.displayName = 'Step1_BaseInfo';
