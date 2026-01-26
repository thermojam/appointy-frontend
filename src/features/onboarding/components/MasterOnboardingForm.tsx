'use client';

import { Title, Subtitle, FormField } from "@/components/ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { masterOnboardingSchema, MasterOnboardingFormValues } from "../schemas/master.schema";

export function MasterOnboardingForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<MasterOnboardingFormValues>({
        resolver: yupResolver(masterOnboardingSchema),
    });

    const onSubmit = (data: MasterOnboardingFormValues) => {
        console.log(data);
    };

    return (
        <div className="flex w-full flex-col items-center justify-center px-4 text-center">
            <div className="w-full max-w-md rounded-[40px] border bg-[rgb(var(--surface))] border-[rgb(var(--border))] shadow-xl">
                <div className="p-6 text-center sm:p-10">
                    <Title className="mb-1 text-xl">Расскажите о себе</Title>
                    <Subtitle className="mb-6 text-sm">Поделитесь своим опытом и навыками</Subtitle>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
                        <FormField<MasterOnboardingFormValues> name="firstName" placeholder="Имя" register={register} errors={errors} />
                        <FormField<MasterOnboardingFormValues> name="lastName" placeholder="Фамилия" register={register} errors={errors} />
                        <FormField<MasterOnboardingFormValues> name="middleName" placeholder="Отчество" register={register} errors={errors} />
                        <FormField<MasterOnboardingFormValues> name="email" placeholder="Email" register={register} errors={errors} />
                        <FormField<MasterOnboardingFormValues> name="city" placeholder="Город" register={register} errors={errors} />
                        <FormField<MasterOnboardingFormValues> name="phoneNumber" placeholder="Номер телефона" register={register} errors={errors} />
                        <FormField<MasterOnboardingFormValues> name="services" placeholder="Ваши услуги (через запятую)" register={register} errors={errors} />

                        <button
                            type="submit"
                            className="h-[52px] mt-6 w-full rounded-[16px] bg-[rgb(var(--button-bg))] text-[rgb(var(--button-text))] transition hover:opacity-90 disabled:opacity-50"
                        >
                            Продолжить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
