'use client';

import { useForm, Controller, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useImperativeHandle } from 'react';
import { Building, Car } from 'lucide-react'; // Иконки
import { workplaceSchema, WorkplaceFormValues } from '../schemas/step2.schema';

const Input = (props: any) => <input {...props} className="border-border bg-surface text-foreground placeholder:text-secondary border p-3 rounded-lg w-full" />;
const ErrorMessage = ({ children }: { children?: React.ReactNode }) => <p className="text-red-500 text-sm mt-1">{children}</p>;
const Label = (props: any) => <label {...props} className="block text-sm font-medium text-foreground mb-1.5" />;

const WorkFormatPicker = ({ value, onChange }: { value: ('PLACE' | 'VISIT')[], onChange: (value: ('PLACE' | 'VISIT')[]) => void }) => {
    const toggleFormat = (format: 'PLACE' | 'VISIT') => {
        const currentValue = Array.isArray(value) ? value : [];
        const newValue = currentValue.includes(format)
            ? currentValue.filter(v => v !== format)
            : [...currentValue, format];
        onChange(newValue);
    };

    const options = [
        { id: 'PLACE', icon: Building, title: 'Салон / студия', desc: 'Вы работаете в определенном месте.' },
        { id: 'VISIT', icon: Car, title: 'С выездом', desc: 'Вы выезжаете к клиенту на дом.' },
    ] as const;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {options.map((option) => {
                const isSelected = value?.includes(option.id);
                const Icon = option.icon;
                return (
                    <div
                        key={option.id}
                        onClick={() => toggleFormat(option.id)}
                        className={`border rounded-xl p-5 text-left cursor-pointer transition-all duration-200 ${
                            isSelected
                                ? 'border-primary bg-primary/5 shadow-md'
                                : 'border-border bg-surface hover:border-border-hover'
                        }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`rounded-full p-2 ${
                                isSelected
                                    ? 'bg-primary/10 text-primary'
                                    : 'bg-muted text-secondary'
                            }`}>
                                <Icon size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground text-md mb-1">{option.title}</h3>
                                <p className="text-sm text-secondary">{option.desc}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

interface Step2WorkplaceProps {
    onValid: (data: WorkplaceFormValues) => void;
    initialData?: Partial<WorkplaceFormValues>;
}

export interface Step2Ref {
    triggerSubmit: () => void;
}

export const Step2_Workplace = forwardRef<Step2Ref, Step2WorkplaceProps>(({ onValid, initialData }, ref) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<WorkplaceFormValues>({
        resolver: yupResolver(workplaceSchema),
        defaultValues: {
            address: initialData?.address || '',
            workFormats: initialData?.workFormats || [],
        }
    });

    const watchedWorkFormats = useWatch({ control, name: 'workFormats', defaultValue: [] });

    useImperativeHandle(ref, () => ({
        triggerSubmit: handleSubmit(onValid)
    }));

    return (
        <div className="space-y-8">
            {/* --- Выбор формата работы --- */}
            <div>
                <Controller
                    name="workFormats"
                    control={control}
                    render={({ field }) => <WorkFormatPicker {...field} />}
                />
                <ErrorMessage>{errors.workFormats?.message}</ErrorMessage>
            </div>

            {watchedWorkFormats.includes('PLACE') && (
                <div>
                    <Label htmlFor="address">Адрес салона / студии *</Label>
                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => <Input {...field} id="address" placeholder="Санкт-Петербург, ул. Пушкина, д. 7" />}
                    />
                    <ErrorMessage>{errors.address?.message}</ErrorMessage>
                </div>
            )}
        </div>
    )
});

Step2_Workplace.displayName = 'Step2_Workplace';
