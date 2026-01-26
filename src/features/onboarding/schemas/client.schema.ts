import * as yup from "yup";

export interface ClientOnboardingFormValues {
    email: string;
    lastName: string;
    firstName: string;
    city: string;
    middleName?: string;
    phoneNumber?: string;
}

export const clientOnboardingSchema: yup.ObjectSchema<ClientOnboardingFormValues> = yup.object({
    email: yup.string().email("Введите корректный email").required("Email обязателен"),
    lastName: yup.string().required("Фамилия обязательна"),
    firstName: yup.string().required("Имя обязательно"),
    city: yup.string().required("Город обязателен"),
    middleName: yup.string(), // Yup автоматически сделает это поле опциональным, т.к. оно опционально в интерфейсе
    phoneNumber: yup.string(),
});
