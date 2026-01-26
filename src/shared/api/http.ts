import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error) => Promise.reject(error)
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
        throw error.response?.data ?? { message: "Unknown error" };
    }
}

export default api;
