import { useMutation, useQuery } from "@tanstack/react-query";
import { authApi, LoginDto, RegisterDto } from "../api/auth.api";

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: LoginDto) => authApi.login(data),
    });
};

export const useRegister = () => {
    return useMutation({
        mutationFn: (data: RegisterDto) => authApi.register(data),
    });
};

export const useProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: () => authApi.profile(),
    });
};

export const useLogout = () => {
    return useMutation({
        mutationFn: () => authApi.logout(),
    });
};
