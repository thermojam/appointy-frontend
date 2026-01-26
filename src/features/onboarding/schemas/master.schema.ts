import * as yup from "yup";

export interface MasterOnboardingFormValues {
    email: string;
    lastName: string;
    firstName: string;
    city: string;
    middleName?: string;
    phoneNumber?: string;
    services?: string[];
}

export const masterOnboardingSchema: yup.ObjectSchema<MasterOnboardingFormValues> = yup.object({
    email: yup.string().email("Введите корректный email").required("Email обязателен"),
    lastName: yup.string().required("Фамилия обязательна"),
    firstName: yup.string().required("Имя обязательно"),
    city: yup.string().required("Город обязателен"),
    middleName: yup.string(),
    phoneNumber: yup.string(),
    services: yup.array().of(yup.string().required()).min(1, "Выберите хотя бы одну услугу"),
});
