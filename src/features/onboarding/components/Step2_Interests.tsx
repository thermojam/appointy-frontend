'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef, useImperativeHandle, useState, ChangeEvent } from 'react';
import { interestsSchema, InterestsFormValues } from '@/features/onboarding/schemas/step2_interests.schema';
import { Input } from '@/components/ui/Input';
// import { Search } from 'lucide-react';

interface Step2InterestsProps {
    onValid: (data: InterestsFormValues) => void;
    initialData?: Partial<InterestsFormValues>;
}

export interface Step2Ref {
    triggerSubmit: () => void;
}

const predefinedInterests = ['Красота', 'Массаж', 'Фотография', 'Обучение', 'Ресницы', 'Ногти', 'Волосы'];

export const Step2_Interests = forwardRef<Step2Ref, Step2InterestsProps>(({ onValid, initialData }, ref) => {
    const { handleSubmit, control, watch, setValue } = useForm<InterestsFormValues>({
        resolver: yupResolver(interestsSchema),
        defaultValues: {
            interests: initialData?.interests || [],
        },
    });

    const [searchTerm, setSearchTerm] = useState('');
    const selectedInterests = watch('interests') || [];

    useImperativeHandle(ref, () => ({
        triggerSubmit: handleSubmit(onValid),
    }));

    const toggleInterest = (interest: string) => {
        const newInterests = selectedInterests.includes(interest)
            ? selectedInterests.filter(i => i !== interest)
            : [...selectedInterests, interest];
        setValue('interests', newInterests, { shouldValidate: true });
    };

    const filteredInterests = predefinedInterests.filter(i =>
        i.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <form onSubmit={handleSubmit(onValid)} className="space-y-6">
            <div className="relative flex items-center">
                <Input
                    id="search-interests"
                    placeholder="Интересы"
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    className="pl-11 h-[52px] w-full"
                />
            </div>

            <Controller
                name="interests"
                control={control}
                render={() => (
                    <div className="flex flex-wrap gap-3">
                        {filteredInterests.map(interest => (
                            <button
                                key={interest}
                                type="button"
                                onClick={() => toggleInterest(interest)}
                                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                                    selectedInterests.includes(interest)
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-muted hover:bg-muted/80'
                                }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                )}
            />
        </form>
    );
});

Step2_Interests.displayName = 'Step2_Interests';
