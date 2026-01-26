'use client';

import React from 'react';

type RadioOption = {
    value: string;
    label: string;
};

interface RadioGroupFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    options: RadioOption[];
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroupField = React.forwardRef<HTMLDivElement, RadioGroupFieldProps>(
    ({options, name, value, onChange, ...props}, ref) => {
        return (
            <div ref={ref} className="flex justify-center items-center space-x-8 my-5">
                {options.map((option) => (
                    <label key={option.value}
                           className="flex items-center space-x-2 cursor-pointer text-sm font-medium text-[rgb(var(--text-primary))] hover:text-[rgb(var(--text-secondary))]">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                            className="h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-[rgb(var(--border))] checked:border-[rgb(var(--accent))] checked:bg-[rgb(var(--accent))] checked:ring-2 checked:ring-offset-2 checked:ring-offset-[rgb(var(--surface))] checked:ring-[rgb(var(--accent))] focus:outline-none"
                            {...props}
                        />
                        <span>{option.label}</span>
                    </label>
                ))}
            </div>
        );
    }
);

RadioGroupField.displayName = 'RadioGroupField';
