"use client"
import React from "react"

export const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
    <input
        ref={ref}
        {...props}
        className="
      h-[52px] w-full rounded-[16px] px-4
      bg-transparent
      border border-[rgb(var(--border))]
      text-[rgb(var(--foreground))]
      placeholder:text-[rgb(var(--secondary))]
      outline-none
      focus:border-[rgb(var(--accent))]
      transition
    "
    />
))
