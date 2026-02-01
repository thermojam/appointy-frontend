import { Clock, HandCoins, ImagePlus, PenBox, Trash2 } from "lucide-react";
import { Button } from "../ui/Button";
import { IService } from "@/shared/types/service";
import Image from "next/image";
import { formatMoney } from "@/shared/utils/formatMoney";

interface MasterServiceCardProps {
    service: IService;
}

export function MasterServiceCard({ service }: MasterServiceCardProps) {
    return (
        <div className="flex p-2 border border-neutral-300 rounded-2xl gap-2">
            {service.imageUrl ? (
                <Image
                    width={200}
                    height={200}
                    src={service.imageUrl}
                    alt={`Изображение услуги ${service.name}`}
                    className="rounded-lg size-40"
                    unoptimized // только для тестовых данных
                />
            ) : (
                <div className="size-40 border border-neutral-300 rounded-lg flex items-center justify-center">
                    <ImagePlus />
                </div>
            )}
            <div className="py-2 px-2 flex flex-col gap-2 grow">
                <div className="space-y-1 grow">
                    <p className="font-bold">{service.name}</p>
                    <p className="text-xs text-neutral-500">
                        {service.description}
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex gap-2">
                        <Clock />
                        {service.duration} мин.
                    </div>
                    <div className="flex gap-2">
                        <HandCoins />
                        {formatMoney(service.price)}
                    </div>
                </div>
            </div>
            <div className="py-2 pr-2 flex gap-2 self-start">
                <Button>
                    <PenBox />
                </Button>
                <Button variant="danger">
                    <Trash2 />
                </Button>
            </div>
        </div>
    );
}
