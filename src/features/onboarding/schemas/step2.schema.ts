import * as yup from 'yup';

export type WorkplaceFormValues = {
    address?: string;
    workFormats: Array<'PLACE' | 'VISIT'>;
};

export const workplaceSchema: yup.ObjectSchema<WorkplaceFormValues> = yup.object({
    address: yup.string().when('workFormats', (workFormats, schema) => {
        if (Array.isArray(workFormats) && workFormats.includes('PLACE')) {
            return schema.required('Укажите адрес вашего салона или студии');
        }
        return schema.optional();
    }),

    workFormats: yup.array()
        .of(yup.string().oneOf(['PLACE', 'VISIT']).required())
        .min(1, 'Выберите хотя бы один формат работы')
        .required('Обязательное поле'),
});
