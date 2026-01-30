import * as yup from 'yup';

export type AboutFormValues = {
    shortBio: string;
    longBio: string;
    careerStartYear: number;
    educationBio: string;
    workStyleBio: string;
};

export const aboutSchema: yup.ObjectSchema<AboutFormValues> = yup.object({
    shortBio: yup.string()
        .required('Это поле обязательно')
        .min(10, 'Минимум 10 символов')
        .max(200, 'Максимум 200 символов'),

    longBio: yup.string()
        .required('Это поле обязательно')
        .min(50, 'Минимум 50 символов'),

    careerStartYear: yup.number()
        .typeError('Введите год числом')
        .required('Укажите год начала работы')
        .integer('Год должен быть целым числом')
        .min(1980, 'Год не может быть раньше 1980')
        .max(new Date().getFullYear(), 'Год не может быть в будущем'),

    educationBio: yup.string().required('Расскажите о вашем образовании'),

    workStyleBio: yup.string().required('Опишите ваш стиль работы'),
});
