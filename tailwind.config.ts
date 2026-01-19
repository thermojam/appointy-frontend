import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: "class",
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--background))",
                foreground: "rgb(var(--foreground))",
            },
        },
    },
    plugins: [],
}

export default config
