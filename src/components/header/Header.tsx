'use client';

import { usePathname } from 'next/navigation';
import { ThemeToggle } from "./ThemeToggle"
import { Logo } from "./Logo"

export function Header() {
    const pathname = usePathname();

    if (pathname.startsWith('/dashboard')) {
        return null;
    }
    return (
        <header className="max-w-[1400px] my-[20px]  mx-auto px-4 flex items-center justify-between">
            <Logo />
            <ThemeToggle />
        </header>
    )
}
