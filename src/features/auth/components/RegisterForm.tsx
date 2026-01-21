"use client"

import {RoleSelector} from "./RoleSelector"
import {GoogleButton} from "./GoogleButton"
import {useRegisterForm} from "../hooks/useRegisterForm"
import {Input, Title, Subtitle} from "@/components/ui"

export function RegisterForm() {
    const {register, handleSubmit, watch, setValue} = useRegisterForm()
    const role = watch("role")

    const onSubmit = (data: any) => {
        console.log("register payload", data)
    }

    return (
        <div className="flex flex-col items-center justify-center px-4 text-center">
            <div className="mb-10">
                <Title className="text-[28px] mb-8">
                    Приложение объединяет мастеров и клиентов в одном месте
                </Title>
                <Subtitle>
                    Маникюр, педикюр, уходовые процедуры — всё доступно в несколько кликов, без звонков, переписок и
                    ожиданий ответа
                    <br/>
                    Выбирайте мастера, смотрите свободные окна, записывайтесь в удобное время и управляйте своими
                    визитами прямо в приложении
                    <br/>
                    Пройдите быструю регистрацию, чтобы оформить первую запись и открыть доступ ко всем возможностям
                    Appointy
                    <br/>
                    Красота должна быть удобной — мы сделали именно так
                </Subtitle>
            </div>

            <div
                className="
          w-full max-w-[520px]
          rounded-[40px] border
          bg-[rgb(var(--surface))]
          border-[rgb(var(--border))]
          shadow-xl
        "
            >
                <div className="px-[52px] py-[40px] text-center">
                    <Title className="text-xl mb-1">Создать аккаунт</Title>
                    <Subtitle className="mb-6 text-sm">
                        Пара деталей — и доступ открыт!
                    </Subtitle>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <Input placeholder="Логин" {...register("login")} />
                        <Input type="password" placeholder="Пароль" {...register("password")} />
                        <Input type="password" placeholder="Подтверждение пароля" {...register("passwordConfirm")} />

                        <RoleSelector
                            value={role}
                            onChange={(r) => setValue("role", r)}
                        />

                        <button
                            type="submit"
                            className="
                h-[52px] w-full rounded-[16px]
                bg-[rgb(var(--button-bg))]
                text-[rgb(var(--button-text))]
                transition hover:opacity-90
              "
                        >
                            Регистрация
                        </button>
                    </form>

                    <div className="my-6 text-center text-xs text-[rgb(var(--secondary))]">
                        или
                    </div>

                    <GoogleButton/>
                </div>
            </div>
        </div>
    )
}
