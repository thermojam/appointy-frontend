'use client';

import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { Input, InputProps } from './Input';

interface FormFieldProps<T extends FieldValues> extends InputProps {
    name: Path<T>;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
}

export function FormField<T extends FieldValues>({
                                                     name,
                                                     register,
                                                     errors,
                                                     ...props
                                                 }: FormFieldProps<T>) {
    const error = errors[name];

    return (
        <div className="w-full flex-grow">
            <Input {...register(name)} {...props} />
            <div className="h-5 pt-1 text-left"> {/* This div reserves space */}
                {error && <p className="text-sm text-red-500">{error.message as string}</p>}
            </div>
        </div>
    );
}
