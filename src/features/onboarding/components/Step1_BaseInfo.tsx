'use client';

import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { baseInfoSchema, BaseInfoFormValues } from '../schemas/step1.schema';
import { X, Upload, MapPin, Plus } from 'lucide-react';

const Input = (props: any) => <input {...props} className="border-border bg-surface text-foreground placeholder:text-secondary border p-3 rounded-lg w-full" />;
const ErrorMessage = ({ children }: { children?: React.ReactNode }) => <p className="text-red-500 text-sm mt-1">{children}</p>;
const Label = (props: any) => <label {...props} className="block text-sm font-medium text-foreground mb-1.5" />;
const SmallButton = (props: any) => <button type="button" {...props} className="text-sm text-secondary hover:text-primary" />
const TagButton = (props: any) => <button type="button" {...props} className="flex items-center gap-1.5 bg-muted rounded-md px-3 py-1.5 text-sm text-secondary" />
const AddButton = (props: any) => <button type="button" {...props} className="flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80" />

const SkillsInput = ({ control, errors }: { control: any, errors: any }) => {
    const { fields, append, remove } = useFieldArray({ control, name: "skills" });
    const [skillValue, setSkillValue] = useState('');

    const handleAddSkill = () => {
        const trimmed = skillValue.trim();
        if (trimmed && !fields.some(field => (field as any).id === trimmed)) {
            append(trimmed);
            setSkillValue('');
        }
    };

    return (
        <div>
            <Label htmlFor="skills-input">Навыки</Label>
            <div className="flex items-center gap-2">
                <Input
                    id="skills-input"
                    placeholder="Маникюр"
                    value={skillValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSkillValue(e.target.value)}
                    onKeyDown={(e: React.KeyboardEvent) => { if(e.key === 'Enter') { e.preventDefault(); handleAddSkill(); }}}
                />
                <AddButton onClick={handleAddSkill}><Plus size={16} /> Добавить</AddButton>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
                {fields.map((field, index) => (
                    <TagButton key={field.id} onClick={() => remove(index)}>
                        {(field as any).toString()} <X size={14} />
                    </TagButton>
                ))}
            </div>
            <ErrorMessage>{errors.skills?.message}</ErrorMessage>
        </div>
    );
};

interface Step1BaseInfoProps {
    role: 'master' | 'client';
    onValid: (data: BaseInfoFormValues) => void;
    initialData?: Partial<BaseInfoFormValues>;
}

export interface Step1Ref {
    triggerSubmit: () => void;
}

export const Step1_BaseInfo = forwardRef<Step1Ref, Step1BaseInfoProps>(({ role, onValid, initialData }, ref) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<BaseInfoFormValues>({
        resolver: yupResolver(baseInfoSchema),
        defaultValues: {
            firstName: initialData?.firstName || '',
            lastName: initialData?.lastName || '',
            patronymic: initialData?.patronymic || '',
            city: initialData?.city || '',
            skills: initialData?.skills || [],
        }
    });

    useImperativeHandle(ref, () => ({
        triggerSubmit: handleSubmit(onValid)
    }));

    return (
        <div className="space-y-6">
            {/* --- Фото профиля --- */}
            <div>
                <Label>Фото профиля</Label>
                <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                        <Upload size={32} className="text-secondary" />
                    </div>
                    <div>
                        <p className="text-sm text-secondary">Профессиональные фотографии укрепляют доверие клиентов и привлекают больше заказов.</p>
                        <p className="text-xs text-secondary/80 mt-1">JPG, PNG или GIF. Максимальный размер - 5 МБ</p>
                    </div>
                </div>
            </div>

            <div>
                <Label htmlFor="email">Почта *</Label>
                <Input id="email" value="user@domain.com" disabled className="bg-muted" />
                <p className="text-xs text-secondary mt-1.5">Рекомендуем указать почту в целях безопасности, чтобы Вы могли восстановить доступ к аккаунту.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="lastName">Фамилия *</Label>
                    <Controller name="lastName" control={control} render={({ field }) => <Input {...field} id="lastName" placeholder="Иванова" />} />
                    <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
                </div>
                <div>
                    <Label htmlFor="firstName">Имя *</Label>
                    <Controller name="firstName" control={control} render={({ field }) => <Input {...field} id="firstName" placeholder="Анна" />} />
                    <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
                </div>
            </div>
            <div>
                <Label htmlFor="patronymic">Отчество</Label>
                <Controller name="patronymic" control={control} render={({ field }) => <Input {...field} id="patronymic" placeholder="Ивановна" />} />
                <ErrorMessage>{errors.patronymic?.message}</ErrorMessage>
            </div>

            <div>
                <Label htmlFor="city">Город *</Label>
                <div className="flex items-center gap-2">
                    <Controller name="city" control={control} render={({ field }) => <Input {...field} id="city" placeholder="Санкт-Петербург" />} />
                    <SmallButton><MapPin size={16} className="inline mr-1.5"/> Определить</SmallButton>
                </div>
                <ErrorMessage>{errors.city?.message}</ErrorMessage>
            </div>

            <div>
                <Label htmlFor="phone">Номер телефона</Label>
                <Input id="phone" placeholder="+7 (___) ___-__-__" />
            </div>

            {role === 'master' && <SkillsInput control={control} errors={errors} />}

        </div>
    )
});

Step1_BaseInfo.displayName = 'Step1_BaseInfo';
