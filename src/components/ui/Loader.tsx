import React from 'react';

interface LoaderProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    size?: number;
}

export const Loader = ({ className, size = 24, ...props }: LoaderProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`animate-spin ${className || ''}`}
            {...props}
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                className="stroke-[rgb(var(--border))]" // Цвет фона (трека)
                strokeWidth="4"
            />
            <path
                d="M12 2 A10 10 0 0 1 22 12"
                className="stroke-[rgb(var(--accent))]"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
};

Loader.displayName = 'Loader';
