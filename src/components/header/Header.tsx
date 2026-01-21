import { ThemeToggle } from "./ThemeToggle"
import { Logo } from "./Logo"

export function Header() {
    return (
        <header className="max-w-[1400px] my-[20px]  mx-auto flex items-center justify-between">
            <Logo />
            <ThemeToggle />
        </header>
    )
}
