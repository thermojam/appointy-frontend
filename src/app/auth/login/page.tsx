import Link from "next/link"
import { LoginForm } from "@/features/auth/components/LoginForm"

export default function LoginPage() {
    return (
        <div className="w-full space-y-4">
            <LoginForm />

            <p className="text-sm text-muted-foreground text-center">
                Нет аккаунта?{" "}
                <Link href="/auth/register" className="text-accent hover:underline">
                    Регистрация
                </Link>
            </p>
        </div>
    )
}
