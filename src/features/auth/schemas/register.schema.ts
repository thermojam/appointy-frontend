import * as yup from "yup"

export const registerSchema = yup.object({
    login: yup.string().required("Введите логин"),
    password: yup.string().min(6, "Минимум 6 символов").required(),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref("password")], "Пароли не совпадают")
        .required(),
    role: yup.mixed<"client" | "master">().oneOf(["client", "master"]),
})

export type RegisterFormValues = yup.InferType<typeof registerSchema>
