import clsx from "clsx";
import Image from "next/image";

type Names = { firstName: string; middleName?: string; lastName?: string };

const getInititals = ({ firstName, lastName }: Names) => {
    const firstLetter = firstName?.at(0) ?? "";
    const secondLetter = lastName?.at(0) ?? "";

    return `${firstLetter}${secondLetter}`;
};

const getAvatarAlt = ({ firstName, middleName, lastName }: Names) => {
    const base = "Аватар пользователя";
    return `${base} ${lastName ?? ""} ${firstName} ${middleName ?? ""}`;
};

interface AvatarProps {
    src?: string;
    names: { firstName: string; lastName?: string; middleName?: string };
    rounded?: "lg" | "2xl" | "3xl" | "4xl";
    size?: number;
}

export function Avatar({ src, names, size = 12, rounded = "lg" }: AvatarProps) {
    if (src) {
        <Image
            src={src}
            alt={getAvatarAlt(names)}
            className={clsx(
                "font-semibold bg-neutral-100 flex items-center justify-center",
                `size-${size}`,
                `rounded-${rounded}`,
            )}
        />;
    }

    return (
        <div
            className={clsx(
                "font-semibold bg-neutral-100 flex items-center justify-center",
                `w-${size} h-${size}`,
                `rounded-${rounded}`,
            )}
        >
            {getInititals(names)}
        </div>
    );
}
