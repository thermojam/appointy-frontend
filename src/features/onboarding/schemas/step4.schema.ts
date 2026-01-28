import * as yup from 'yup';

// 1. Тип данных определяется вручную.
export type BookingRulesFormValues = {
    bookingAllowedDays: number;
    cancelAllowedHours: number;
};

// 2. Схема валидации создается в строгом соответствии с типом.
// ИСПРАВЛЕНИЕ: yup.Schema заменен на yup.ObjectSchema для совместимости с yupResolver
export const bookingRulesSchema: yup.ObjectSchema<BookingRulesFormValues> = yup.object({
    bookingAllowedDays: yup.number()
        .typeError('Введите число')
        .required('Обязательное поле')
        .min(1, 'Минимум 1 день')
        .max(30, 'Максимум 30 дней'),
    cancelAllowedHours: yup.number()
        .typeError('Введите число')
        .required('Обязательное поле')
        .min(1, 'Минимум 1 час')
        .max(72, 'Максимум 72 часа'),
});
