'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useImperativeHandle } from 'react';
import { aboutSchema, AboutFormValues } from '../schemas/step3.schema';
const Input = (props: any) => <input {...props} className="border-border bg-surface text-foreground placeholder:text-secondary border p-3 rounded-lg w-full" />;
const Textarea = (props: any) => <textarea {...props} rows={4} className="border-border bg-surface text-foreground placeholder:text-secondary border p-3 rounded-lg w-full" />;
const ErrorMessage = ({ children }: { children?: React.ReactNode }) => <p className="text-red-500 text-sm mt-1">{children}</p>;
const Label = (props: any) => <label {...props} className="block text-base font-medium text-foreground mb-2" />;

interface Step3AboutProps {
    onValid: (data: AboutFormValues) => void;
    initialData?: Partial<AboutFormValues>;
}

export interface Step3Ref {
    triggerSubmit: () => void;
}

export const Step3_About = forwardRef<Step3Ref, Step3AboutProps>(({ onValid, initialData }, ref) => {

    const { control, handleSubmit, formState: { errors } } = useForm<AboutFormValues>({
        resolver: yupResolver(aboutSchema),
        defaultValues: {
            shortBio: initialData?.shortBio || '',
            longBio: initialData?.longBio || '',
            careerStartYear: initialData?.careerStartYear || new Date().getFullYear(),
            educationBio: initialData?.educationBio || '',
            workStyleBio: initialData?.workStyleBio || '',
        }
    });

    useImperativeHandle(ref, () => ({
        triggerSubmit: handleSubmit(onValid)
    }));

    return (
        <form onSubmit={handleSubmit(onValid)} className="space-y-6">
            <div>
                <Label htmlFor="shortBio">Короткий абзац</Label>
                <Controller name="shortBio" control={control} render={({ field }) => <Input {...field} id="shortBio" placeholder="Краткое описание для карточки мастера" />} />
                <ErrorMessage>{errors.shortBio?.message}</ErrorMessage>
            </div>

            <div>
                <Label htmlFor="longBio">Расширенное описание</Label>
                <Controller name="longBio" control={control} render={({ field }) => <Textarea {...field} id="longBio" placeholder="Подробное описание для вашего профиля" />} />
                <ErrorMessage>{errors.longBio?.message}</ErrorMessage>
            </div>

            <div>
                <Label htmlFor="careerStartYear">Год начала работы</Label>
                <Controller name="careerStartYear" control={control} render={({ field }) => <Input {...field} type="number" id="careerStartYear" placeholder="2020" />} />
                <ErrorMessage>{errors.careerStartYear?.message}</ErrorMessage>
            </div>

            <div>
                <Label htmlFor="educationBio">Образование и курсы</Label>
                <Controller name="educationBio" control={control} render={({ field }) => <Textarea {...field} id="educationBio" placeholder="Расскажите о вашей квалификации" />} />
                <ErrorMessage>{errors.educationBio?.message}</ErrorMessage>
            </div>

            <div>
                <Label htmlFor="workStyleBio">Стиль работы</Label>
                <Controller name="workStyleBio" control={control} render={({ field }) => <Textarea {...field} id="workStyleBio" placeholder="Опишите ваш подход к работе и клиентам" />} />
                <ErrorMessage>{errors.workStyleBio?.message}</ErrorMessage>
            </div>
        </form>
    )
});

Step3_About.displayName = 'Step3_About';
