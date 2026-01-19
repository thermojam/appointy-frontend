import { ThemeToggle } from "./theme-toggle"
import { Logo } from "./logo"

export function Header() {
    return (
        <header className="flex items-center justify-between p-[10px]">
            <Logo />
            <ThemeToggle />
        </header>
    )
}
