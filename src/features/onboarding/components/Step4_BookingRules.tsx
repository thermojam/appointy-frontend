'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useImperativeHandle } from 'react';

import { bookingRulesSchema, BookingRulesFormValues } from '../schemas/step4.schema';

const Label = (props: any) => <label {...props} className="block text-base font-medium text-foreground" />;
const Switch = (props: any) => <div className='w-12 h-6 bg-muted rounded-full relative'><div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div></div>; // Улучшенная заглушка
const Select = (props: any) => <select {...props} className="border-border bg-surface text-foreground placeholder:text-secondary border p-3 rounded-lg w-full" />;

interface Step4BookingRulesProps {
    onValid: (data: BookingRulesFormValues) => void;
    initialData?: Partial<BookingRulesFormValues>;
}

export interface Step4Ref {
    triggerSubmit: () => void;
}

export const Step4_BookingRules = forwardRef<Step4Ref, Step4BookingRulesProps>(({ onValid, initialData }, ref) => {

    const { handleSubmit } = useForm<BookingRulesFormValues>({
        resolver: yupResolver(bookingRulesSchema),
    });

    // TODO: Когда бэкенд будет готов, здесь будет реальная логика.
    // Сейчас onValid просто переведет на следующий шаг без отправки данных.
    useImperativeHandle(ref, () => ({
        // Передаем пустой объект, так как данных для сохранения нет
        triggerSubmit: handleSubmit(() => onValid({}))
    }));

    return (
        <form onSubmit={handleSubmit(() => onValid({}))} className="space-y-8">
            {/* TODO: Эти поля должны быть подключены к react-hook-form, как только появятся в схеме */}
            <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                    <Label>Требовать подтверждения бронирования</Label>
                    <p className='text-sm text-secondary mt-1'>Если параметр выключен, бронирование подтверждается автоматически.</p>
                </div>
                <Switch />
            </div>

            <div>
                <Label className='mb-2'>Максимальное предварительное бронирование</Label>
                <Select>
                    <option>1 неделя</option>
                    <option>2 недели</option>
                    <option>1 месяц</option>
                </Select>
            </div>

            <div>
                <Label className='mb-2'>Минимальное время отмены записи</Label>
                <Select>
                    <option>за 12 часов</option>
                    <option>за 24 часа</option>
                    <option>за 2 дня</option>
                </Select>
            </div>
        </form>
    )
});

Step4_BookingRules.displayName = 'Step4_BookingRules';
