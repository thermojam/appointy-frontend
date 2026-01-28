import * as yup from 'yup';

// 1. Тип данных определяется вручную.
export type AboutFormValues = {
    shortBio?: string;
    longBio?: string;
    careerStartYear?: number;
    educationBio?: string;
    workStyleBio?: string;
};

// 2. Схема валидации создается в строгом соответствии с типом.
export const aboutSchema: yup.ObjectSchema<AboutFormValues> = yup.object({
    shortBio: yup.string().optional(),
    longBio: yup.string().optional(),
    careerStartYear: yup.number()
        // ИСПРАВЛЕНИЕ: Пустая строка (из поля ввода) корректно преобразуется в undefined
        .transform((value, originalValue) => (String(originalValue).trim() === '' ? undefined : value))
        // .nullable() убран, чтобы тип соответствовал `number | undefined`
        .typeError('Введите год числом')
        .integer('Год должен быть целым числом')
        .min(1980, 'Слишком ранний год')
        .max(new Date().getFullYear(), 'Год не может быть в будущем')
        .optional(),
    educationBio: yup.string().optional(),
    workStyleBio: yup.string().optional(),
});
