import * as yup from "yup"

export const registerSchema = yup.object({
    username: yup.string().required("Введите имя пользователя"),
    password: yup.string().min(6, "Минимум 6 символов").required(),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref("password")], "Пароли не совпадают")
        .required("Подтвердите пароль"),
    role: yup.mixed<"client" | "master">().oneOf(["client", "master"]).required("Выберите роль"),
})

export type RegisterFormValues = yup.InferType<typeof registerSchema>
