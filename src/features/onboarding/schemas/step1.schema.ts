import * as yup from 'yup';

// 1. Тип данных определяется вручную.
export type BaseInfoFormValues = {
    firstName: string;
    lastName: string;
    patronymic?: string; // Отчество
    city: string; // Город
    // profilePhoto?: File; // TODO: Разобраться с валидацией файлов
    // phoneNumber: string; // TODO: Добавить валидацию телефона
    skills?: string[];
};

// 2. Схема валидации создается в строгом соответствии с типом.
export const baseInfoSchema: yup.ObjectSchema<BaseInfoFormValues> = yup.object({
    firstName: yup.string().required('Введите имя'),
    lastName: yup.string().required('Введите фамилию'),
    patronymic: yup.string().optional(),
    city: yup.string().required('Укажите город'),
    skills: yup.array().of(yup.string().required()).optional(),
});
