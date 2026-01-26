import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// 1. Интерцептор для добавления токена к запросам
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 2. Интерцептор для сохранения токена из ответа
api.interceptors.response.use(
    (response) => {
        if (response.data && response.data.accessToken) {
            localStorage.setItem("accessToken", response.data.accessToken);
        }
        return response;
    },
    (error) => {
        // Можно добавить логику обработки истекшего токена, если нужно
        return Promise.reject(error);
    }
);

type HttpOptions = {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    headers?: Record<string, string>;
};

export async function http<T>(
    path: string,
    options: HttpOptions = {}
): Promise<T> {
    try {
        const res = await api.request<T>({
            url: path,
            method: options.method ?? "GET",
            data: options.body,
            headers: options.headers,
        });

        return res.data;
    } catch (e) {
        const error = e as AxiosError<any>;
        // Перехватчики уже обработали ошибку, просто пробрасываем ее дальше
        throw error.response?.data ?? { message: "Unknown error" };
    }
}

// Экспортируем инстанс axios, если он нужен где-то еще
export default api;
