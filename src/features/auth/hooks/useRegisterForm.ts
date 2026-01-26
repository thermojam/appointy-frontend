import { useForm } from "react-hook-form"
import type { Role } from "../api/auth.api"

interface RegisterFormValues {
    login: string
    password: string
    passwordConfirm: string
    role: Role
}

export function useRegisterForm() {
    return useForm<RegisterFormValues>({
        defaultValues: {
            login: "",
            password: "",
            passwordConfirm: "",
            role: "client",
        },
    })
}
