import { Dot, PenBox, Plus, Save, Trash2, Undo2 } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Input } from "../ui";
import { Button } from "../ui/Button";

interface EditorProps {
    selectedDate: Date;
}

export function Editor({ selectedDate }: EditorProps) {
    return (
        <div>
            <div className="mb-6">
                <time dateTime="" className="font-bold">
                    <span className="capitalize">
                        {format(selectedDate, "EEEE", { locale: ru })}
                    </span>
                    <Dot className="inline" />
                    <span>
                        {format(selectedDate, "d MMMM y", {
                            locale: ru,
                        })}
                    </span>
                </time>
                <p className="text-neutral-500 text-sm">
                    Настройте рабочее время для этого дня
                </p>
            </div>
            <div className="mb-6">
                <p className="mb-3 font-semibold">Смена</p>
                <div className="flex gap-2">
                    <label className="w-full space-y-2">
                        <p className="text-sm">Начало</p>
                        <Input placeholder="00:00" type="time" />
                    </label>
                    <label className="w-full space-y-2">
                        <p className="text-sm">Конец</p>
                        <Input placeholder="00:00" type="time" />
                    </label>
                </div>
            </div>
            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <p className="font-semibold">Перерывы</p>
                    <Plus />
                </div>
                <p className="text-neutral-500 text-sm">
                    Нажмите <Plus className="inline" />, если Вам нужно добавить
                    перерыв в смене
                </p>
                <div className="flex gap-2">
                    <label className="w-full space-y-2">
                        <p className="text-sm">Начало</p>
                        <Input placeholder="00:00" type="time" />
                    </label>
                    <label className="w-full space-y-2">
                        <p className="text-sm">Конец</p>
                        <Input placeholder="00:00" type="time" />
                    </label>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <p className="flex-1 text-sm">Начало</p>
                        <p className="flex-1 text-sm">Конец</p>
                    </div>
                    <div className="flex gap-2">
                        <label className="flex-1 space-y-2">
                            <Input placeholder="00:00" type="time" />
                        </label>
                        <div className="flex-1 flex gap-2">
                            <label className="w-full space-y-2">
                                <Input placeholder="00:00" type="time" />
                            </label>
                            <Button variant="danger">
                                <Trash2 />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 justify-end">
                <Button>
                    <PenBox />
                    Редактировать
                </Button>
            </div>

            <div className="flex gap-2 justify-end">
                <Button variant="danger" className="flex-1">
                    <Trash2 />
                    Удалить
                </Button>
                <Button variant="positive" className="flex-1">
                    <Save />
                    Сохранить
                </Button>
            </div>

            <div className="flex gap-2 justify-end">
                <Button variant="secondary" className="flex-1">
                    <Undo2 />
                    Отменить
                </Button>
                <Button variant="positive" className="flex-1">
                    <Save />
                    Сохранить
                </Button>
            </div>
        </div>
    );
}
