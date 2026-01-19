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
            className="rounded-md p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            disabled={!mounted}
        >
            {mounted ? (
                isDark ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />
            ) : (
                <span className="block h-6 w-6" />
            )}
        </button>
    )
}
