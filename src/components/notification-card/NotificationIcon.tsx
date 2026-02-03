import { NotificationType } from "@/shared/types/notification";
import {
    CheckCheck,
    Flag,
    Heart,
    Loader,
    MessageCircle,
    Star,
    UserStar,
    X,
} from "lucide-react";

export function NotificationIcon({ type }: { type: NotificationType }) {
    switch (type) {
        case "LIKE":
            return <Heart className="size-4 text-red-500 fill-red-500" />;
        case "COMMENT":
            return <MessageCircle className="size-4" />;
        case "REVIEW":
            return <Star className="size-4" />;
        case "FAVORITE_MASTER":
            return <UserStar className="size-4" />;
        case "APPOINTMENT_CREATED":
            return <Loader className="size-4 text-yellow-700" />;
        case "APPOINTMENT_CONFIRMED":
            return <CheckCheck className="size-4 text-green-600" />;
        case "APPOINTMENT_CANCELLED":
            return <X className="size-4 text-red-500" />;
        case "APPOINTMENT_COMPLETED":
            return <Flag className="size-4" />;
    }
}
