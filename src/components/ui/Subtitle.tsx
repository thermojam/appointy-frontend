import { ReactNode } from "react"

interface SubtitleProps {
    children: ReactNode
    className?: string
}

export function Subtitle({ children, className = "" }: SubtitleProps) {
    return (
        <p className={`text-sm text-[rgb(var(--secondary))] leading-relaxed ${className}`}>
            {children}
        </p>
    )
}
