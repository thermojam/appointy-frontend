'use client';

import { useForm, Controller, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useImperativeHandle } from 'react';
import { workplaceSchema, WorkplaceFormValues } from '../schemas/step2.schema';

const Input = (props: any) => <input {...props} className="border-border bg-surface text-foreground placeholder:text-secondary border p-3 rounded-lg w-full" />;
const ErrorMessage = ({ children }: { children?: React.ReactNode }) => <p className="text-red-500 text-sm mt-1">{children}</p>;
const Label = (props: any) => <label {...props} className="block text-base font-medium text-foreground mb-2" />;

interface Step2WorkplaceProps {
    onValid: (data: WorkplaceFormValues) => void;
    initialData?: Partial<WorkplaceFormValues>;
}

export interface Step2Ref {
    triggerSubmit: () => void;
}

const workplaceOptions = [
    { id: 'PLACE', title: 'Салон / студия', description: 'Вы работаете в определенном месте' },
    { id: 'VISIT', title: 'С выездом', description: 'Вы выезжаете к клиенту на дом' },
];

export const Step2_Workplace = forwardRef<Step2Ref, Step2WorkplaceProps>(({ onValid, initialData }, ref) => {

    const { control, handleSubmit, formState: { errors } } = useForm<WorkplaceFormValues>({
        resolver: yupResolver(workplaceSchema),
        defaultValues: {
            workFormats: initialData?.workFormats || [],
            address: initialData?.address || '',
        }
    });

    const workFormats = useWatch({ control, name: 'workFormats' });

    useImperativeHandle(ref, () => ({
        triggerSubmit: handleSubmit(onValid),
    }));

    return (
        <form onSubmit={handleSubmit(onValid)} className="space-y-8">
            <div>
                <Label>Формат работы</Label>
                <Controller
                    name="workFormats"
                    control={control}
                    render={({ field }) => (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {workplaceOptions.map(option => {
                                const isSelected = field.value.includes(option.id as 'PLACE' | 'VISIT');
                                return (
                                    <button
                                        key={option.id}
                                        type="button"
                                        onClick={() => {
                                            const newValue = isSelected
                                                ? field.value.filter(item => item !== option.id)
                                                : [...field.value, option.id];
                                            field.onChange(newValue);
                                        }}
                                        className="
                                            'p-6 rounded-lg border text-left transition',
                                            isSelected
                                                ? 'bg-primary/10 border-primary shadow-inner'
                                                : 'bg-surface hover:bg-muted'
                                        "
                                    >
                                        <p className="font-semibold text-lg">{option.title}</p>
                                        <p className="text-sm text-secondary mt-1">{option.description}</p>
                                    </button>
                                );
                            })}
                        </div>
                    )}
                />
                <ErrorMessage>{errors.workFormats?.message}</ErrorMessage>
            </div>

            {workFormats.includes('PLACE') && (
                <div>
                    <Label htmlFor="address">Адрес салона</Label>
                    <Controller
                        name="address"
                        control={control}
                        render={({ field }) => <Input {...field} id="address" placeholder="Например, ул. Пушкина, д. 10, офис 205" />}
                    />
                    <ErrorMessage>{errors.address?.message}</ErrorMessage>
                </div>
            )}
        </form>
    );
});

Step2_Workplace.displayName = 'Step2_Workplace';
