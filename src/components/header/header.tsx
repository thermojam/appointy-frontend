import { ThemeToggle } from "./theme-toggle"
import { Logo } from "./logo"

export function Header() {
    return (
        <header className="max-w-[1400px] my-[20px]  mx-auto flex items-center justify-between">
            <Logo />
            <ThemeToggle />
        </header>
    )
}
