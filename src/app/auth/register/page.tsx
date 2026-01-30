import Link from "next/link";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="w-full space-y-4">
            <RegisterForm />

            <p className="text-sm text-muted-foreground text-center">
                Уже есть аккаунт?{" "}
                <Link
                    href="/auth/login"
                    className="text-accent hover:underline"
                >
                    Войти
                </Link>
            </p>
        </div>
    );
}
