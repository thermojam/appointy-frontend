import { http } from "@/shared/api/http"

export type Role = "client" | "master"

export interface RegisterDto {
    username: string
    password: string
    role: Role
}


export interface LoginDto {
    username: string
    password: string
}

export const authApi = {
    register(data: RegisterDto) {
        return http("/auth/register", {
            method: "POST",
            body: data,
        })
    },

    login(data: LoginDto) {
        return http("/auth/login", {
            method: "POST",
            body: data,
        })
    },

    profile() {
        return http("/auth/profile")
    },

    logout() {
        return http("/auth/logout", {
            method: "POST",
        })
    },
}
