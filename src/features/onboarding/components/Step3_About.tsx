'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useImperativeHandle } from 'react';

import { aboutSchema, AboutFormValues } from '../schemas/step3.schema';

const Input = (props: any) => <input {...props} className="border-border bg-surface text-foreground placeholder:text-secondary border p-3 rounded-lg w-full" />;
const Textarea = (props: any) => <textarea {...props} rows={4} className="border-border bg-surface text-foreground placeholder:text-secondary border p-3 rounded-lg w-full" />;
const ErrorMessage = ({ children }: { children?: React.ReactNode }) => <p className="text-red-500 text-sm mt-1">{children}</p>;
const Label = (props: any) => <label {...props} className="block text-base font-medium text-foreground" />;
const HelperText = ({ children }: { children?: React.ReactNode }) => <p className="text-sm text-secondary mt-1 mb-2">{children}</p>;

interface Step3AboutProps {
    onValid: (data: AboutFormValues) => void;
    initialData?: Partial<AboutFormValues>;
}

export interface Step3Ref {
    triggerSubmit: () => void;
}

export const Step3_About = forwardRef<Step3Ref, Step3AboutProps>(({ onValid, initialData }, ref) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<AboutFormValues>({
        resolver: yupResolver(aboutSchema),
        defaultValues: {
            shortBio: initialData?.shortBio || '',
            longBio: initialData?.longBio || '',
            careerStartYear: initialData?.careerStartYear,
            educationBio: initialData?.educationBio || '',
            workStyleBio: initialData?.workStyleBio || '',
        }
    });

    useImperativeHandle(ref, () => ({
        triggerSubmit: handleSubmit(onValid)
    }));

    const formFields = [
        {
            name: "shortBio",
            label: "Ключевые навыки",
            helper: "Кратко перечислите ваши главные услуги. Они будут показаны в превью профиля.",
            placeholder: "Маникюр, педикюр, покрытие гель-лаком",
            component: Input,
        },
        {
            name: "longBio",
            label: "О себе",
            helper: "Подробно расскажите о себе, своем опыте и подходе к работе.",
            placeholder: "Привет! Я — Анна, мастер с 5-летним опытом...",
            component: Textarea,
        },
        {
            name: "careerStartYear",
            label: "Год начала карьеры",
            helper: "Укажите, когда вы начали профессионально заниматься своей деятельностью.",
            placeholder: "2018",
            component: Input,
            props: { type: 'number' }
        },
        {
            name: "educationBio",
            label: "Образование и курсы",
            helper: "Расскажите о своем профильном образовании и пройденных курсах.",
            placeholder: "2021 - Курс “Современный маникюр”, Школа “NailPro”...",
            component: Textarea,
        },
        {
            name: "workStyleBio",
            label: "Подход к работе и стиль",
            helper: "Опишите, что для вас важно в работе и какие материалы вы используете.",
            placeholder: "Я за минимализм и натуральность. В работе использую...",
            component: Textarea,
        },
    ];

    return (
        <div className="space-y-6">
            {formFields.map(item => {
                const { name, label, helper, placeholder, component: Component, props } = item as any;
                return (
                    <div key={name}>
                        <Label htmlFor={name}>{label}</Label>
                        <HelperText>{helper}</HelperText>
                        <Controller
                            name={name}
                            control={control}
                            render={({ field }) => (
                                <Component {...field} id={name} placeholder={placeholder} {...props} value={field.value ?? ''} />
                            )}
                        />
                        <ErrorMessage>{errors[name as keyof AboutFormValues]?.message}</ErrorMessage>
                    </div>
                )
            })}
        </div>
    )
});

Step3_About.displayName = 'Step3_About';
