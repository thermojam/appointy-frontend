import * as yup from 'yup';


export type BookingRulesFormValues = {
    // TODO: Добавить сюда типы, когда поля появятся на бэкенде.
    // bookingConfirmationRequired?: boolean;
    // maxBookingLeadTime?: string;
    // minCancellationTime?: string;
};

export const bookingRulesSchema: yup.ObjectSchema<BookingRulesFormValues> = yup.object({});
