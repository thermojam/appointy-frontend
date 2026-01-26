import { http } from "@/shared/api/http"

export type Role = "client" | "master"

// Убираем роль отсюда, бэкенд её не ждет при регистрации
export interface RegisterDto {
    username: string
    password: string
}

export interface LoginDto {
    username: string
    password: string
}

export interface LoginResponse {
    message: string;
    user: {
        id: string;
        username: string;
    };
}

export interface ProfileResponse {
    id: string;
    username: string;
    role: Role;
    email: string | null;
    phone: string | null;
    firstName: string | null;
    lastName: string | null;
}


export const authApi = {
    register(data: RegisterDto) {
        return http("/auth/register", {
            method: "POST",
            body: data,
        })
    },

    login(data: LoginDto) {
        return http<LoginResponse>("/auth/login", {
            method: "POST",
            body: data,
        })
    },

    profile() {
        return http<ProfileResponse>("/auth/profile")
    },

    logout() {
        return http("/auth/logout", {
            method: "POST",
        })
    },
}
