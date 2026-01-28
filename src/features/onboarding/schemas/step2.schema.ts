import * as yup from 'yup';

// 1. Тип данных определяется вручную.
export type WorkplaceFormValues = {
    address?: string;
    workFormats: Array<'PLACE' | 'VISIT'>;
};

// 2. Схема валидации создается в строгом соответствии с типом.
export const workplaceSchema: yup.ObjectSchema<WorkplaceFormValues> = yup.object({
    // ИЗМЕНЕНИЕ: Поле address теперь обязательно, если workFormats содержит 'PLACE'
    address: yup.string().when('workFormats', ([workFormats], schema) => {
        if (Array.isArray(workFormats) && workFormats.includes('PLACE')) {
            return schema.required('Укажите адрес вашего салона или студии');
        }
        return schema.optional(); // В остальных случаях поле необязательно
    }),
    workFormats: yup.array()
        .of(yup.string().oneOf(['PLACE', 'VISIT']).required())
        .min(1, 'Выберите хотя бы один формат работы')
        .required('Обязательное поле'),
});
