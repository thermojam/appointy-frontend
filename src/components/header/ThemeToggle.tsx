"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = resolvedTheme === "dark"

    return (
        <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="cursor-pointer"
            disabled={!mounted}
        >
            {mounted ? (
                isDark ? (
                    <Sun className="h-8 w-8" />
                ) : (
                    <Moon className="h-8 w-8" />
                )
            ) : (
                <span className="block h-8 w-8" />
            )}
        </button>
    )
}
