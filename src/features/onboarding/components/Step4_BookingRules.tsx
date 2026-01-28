'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useImperativeHandle } from 'react';

import { bookingRulesSchema, BookingRulesFormValues } from '../schemas/step4.schema';

const Input = (props: any) => <input {...props} className="border-border bg-surface text-foreground placeholder:text-secondary border p-3 rounded-lg w-full" />;
const ErrorMessage = ({ children }: { children?: React.ReactNode }) => <p className="text-red-500 text-sm mt-1">{children}</p>;
const Label = (props: any) => <label {...props} className="block text-base font-medium text-foreground" />;
const HelperText = ({ children }: { children?: React.ReactNode }) => <p className="text-sm text-secondary mt-1 mb-2">{children}</p>;

const InputWithAddon = ({ addon, ...props }: { addon: string } & React.ComponentProps<'input'>) => (
    <div className="relative">
        <Input {...props} />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-secondary">
            <span>{addon}</span>
        </div>
    </div>
);


interface Step4BookingRulesProps {
    onValid: (data: BookingRulesFormValues) => void;
    initialData?: Partial<BookingRulesFormValues>;
}

export interface Step4Ref {
    triggerSubmit: () => void;
}

export const Step4_BookingRules = forwardRef<Step4Ref, Step4BookingRulesProps>(({ onValid, initialData }, ref) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<BookingRulesFormValues>({
        resolver: yupResolver(bookingRulesSchema),
        defaultValues: {
            bookingAllowedDays: initialData?.bookingAllowedDays || 7,
            cancelAllowedHours: initialData?.cancelAllowedHours || 24,
        }
    });

    useImperativeHandle(ref, () => ({
        triggerSubmit: handleSubmit(onValid)
    }));

    const formFields = [
        {
            name: "bookingAllowedDays",
            label: "Доступность записи",
            helper: "На сколько дней вперед клиенты могут забронировать ваше время?",
            addon: "дней",
        },
        {
            name: "cancelAllowedHours",
            label: "Отмена записи",
            helper: "За сколько часов до начала клиент может бесплатно отменить запись?",
            addon: "часов",
        },
    ];

    return (
        <div className="space-y-6">
            {formFields.map(item => {
                const { name, label, helper, addon } = item as any;
                return (
                    <div key={name}>
                        <Label htmlFor={name}>{label}</Label>
                        <HelperText>{helper}</HelperText>
                        <Controller
                            name={name}
                            control={control}
                            render={({ field }) => (
                                <InputWithAddon {...field} type="number" id={name} addon={addon} />
                            )}
                        />
                        <ErrorMessage>{errors[name as keyof BookingRulesFormValues]?.message}</ErrorMessage>
                    </div>
                )
            })}
        </div>
    )
});

Step4_BookingRules.displayName = 'Step4_BookingRules';
