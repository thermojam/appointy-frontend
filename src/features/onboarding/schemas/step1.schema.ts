import * as yup from 'yup';

export type BaseInfoFormValues = {
    firstName: string;
    lastName: string;
    middleName?: string;
    email: string;
    phone: string;
    avatarUrl?: string;
    city: string;
    skills: string[];
};

export const baseInfoSchema: yup.ObjectSchema<BaseInfoFormValues> = yup.object({
    firstName: yup.string().required('Имя обязательно для заполнения'),
    lastName: yup.string().required('Фамилия обязательна для заполнения'),
    middleName: yup.string().optional(),
    email: yup.string().email('Введите корректный email').required('Email обязателен для заполнения'),
    // TODO: Улучшить валидацию для номера телефона
    phone: yup.string().required('Номер телефона обязателен'),
    avatarUrl: yup.string().url('Некорректный URL аватара').optional(),
    city: yup.string().required('Город обязателен для заполнения'),
    skills: yup.array()
        .of(yup.string().required())
        .min(1, 'Выберите хотя бы один навык')
        .required('Обязательное поле'),
});
