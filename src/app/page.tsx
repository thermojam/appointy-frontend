import {Header} from "@/components/header/Header";
import {RegisterForm} from "@/features/auth/components/RegisterForm";

export default function App() {
    return (
        <main className="min-h-screen w-full bg-background text-foreground transition-colors">
            <Header/>
            <RegisterForm/>
        </main>
    )
}
