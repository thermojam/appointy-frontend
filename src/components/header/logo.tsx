import { Scissors } from "lucide-react"

export function Logo() {
    return (
        <div className="flex select-none items-end gap-1">
            <Scissors
                className="mb-[2px] h-7 w-7 -rotate-90"
                strokeWidth={1.5}
            />
            <span
                className="text-[26px] leading-none"
                style={{ fontFamily: "var(--font-dancing)" }}
            >
        Appointy
      </span>
        </div>
    )
}
