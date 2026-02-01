export interface IAppointment {
    id: string;
    createdAt: string;
    updatedAt: string;
    masterId: string;
    clientId: string;
    serviceId: string;
    startTime: string;
    endTime: string;
    price: number;
    status: TAppointmentStatus;
    cancelledAt?: string;
    cancelledBy?: TCancelledBy;
    cancelReason?: string;
}

export const OStatus = {
    pending: "PENDING",
    confirmed: "CONFIRMED",
    cancelled: "CANCELLED",
    completed: "COMPLETED",
} as const;

export type TAppointmentStatus = (typeof OStatus)[keyof typeof OStatus];

export const OCancelledBy = {
    master: "MASTER",
    client: "CLIENT",
} as const;

export type TCancelledBy = (typeof OCancelledBy)[keyof typeof OCancelledBy];
