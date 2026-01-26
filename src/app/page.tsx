import {Title, Subtitle} from "@/components/ui";


export default function HomePage() {
    return (
        <div className="flex w-full flex-col items-center justify-center px-4 text-center">
            <Title className="mb-8 text-2xl leading-tight md:text-3xl">
                Добро пожаловать!
            </Title>
            <Subtitle>
                Вы успешно вошли в систему. Это ваша главная страница.
            </Subtitle>
        </div>
    )
}

