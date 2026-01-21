"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema, RegisterFormValues } from "../schemas/register.schema"

export function useRegisterForm() {
    return useForm<RegisterFormValues>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            login: "",
            password: "",
            passwordConfirm: "",
            role: "client",
        },
    })
}
