import { INotification } from "../types/notification";

const now = new Date();
const today = new Date(now).toISOString();
const yesterdayDate = new Date(now);
yesterdayDate.setDate(now.getDate() - 1);
const yesterday = yesterdayDate.toISOString();

const daysAgo = (days: number) => {
    const d = new Date(now);
    d.setDate(now.getDate() - days);
    return d.toISOString();
};

export const notifications: INotification[] = [
    // ─── TODAY ─────────────────────────────────────────────
    {
        id: "n1",
        authorId: "user_2",
        recipientId: "user_1",
        type: "LIKE",
        targetId: "comment_12",
        targetType: "COMMENT",
        isRead: false,
        createdAt: today,
        updatedAt: today,
    },
    {
        id: "n2",
        authorId: "user_3",
        recipientId: "user_1",
        type: "APPOINTMENT_CONFIRMED",
        targetId: "appointment_5",
        targetType: "APPOINTMENT",
        isRead: false,
        createdAt: today,
        updatedAt: today,
    },

    // ─── YESTERDAY ─────────────────────────────────────────
    {
        id: "n3",
        authorId: "user_4",
        recipientId: "user_1",
        type: "COMMENT",
        targetId: "review_7",
        targetType: "COMMENT",
        isRead: true,
        createdAt: yesterday,
        updatedAt: yesterday,
    },
    {
        id: "n4",
        authorId: "user_5",
        recipientId: "user_1",
        type: "FAVORITE_MASTER",
        targetId: "master_3",
        targetType: "MASTER",
        isRead: true,
        createdAt: yesterday,
        updatedAt: yesterday,
    },

    // ─── THIS WEEK ─────────────────────────────────────────
    {
        id: "n5",
        authorId: "user_6",
        recipientId: "user_1",
        type: "REVIEW",
        targetId: "master_3",
        targetType: "MASTER",
        isRead: true,
        createdAt: daysAgo(3),
        updatedAt: daysAgo(3),
    },
    {
        id: "n6",
        authorId: "user_2",
        recipientId: "user_1",
        type: "LIKE",
        targetId: "post_9",
        targetType: "SERVICE",
        isRead: true,
        createdAt: daysAgo(4),
        updatedAt: daysAgo(4),
    },
    {
        id: "n7",
        authorId: "user_7",
        recipientId: "user_1",
        type: "APPOINTMENT_CREATED",
        targetId: "appointment_2",
        targetType: "APPOINTMENT",
        isRead: true,
        createdAt: daysAgo(5),
        updatedAt: daysAgo(5),
    },

    // ─── EARLIER ───────────────────────────────────────────
    {
        id: "n8",
        authorId: "user_8",
        recipientId: "user_1",
        type: "APPOINTMENT_CANCELLED",
        targetId: "appointment_1",
        targetType: "APPOINTMENT",
        isRead: true,
        createdAt: daysAgo(10),
        updatedAt: daysAgo(10),
    },
    {
        id: "n9",
        authorId: "user_9",
        recipientId: "user_1",
        type: "APPOINTMENT_COMPLETED",
        targetId: "appointment_8",
        targetType: "APPOINTMENT",
        isRead: true,
        createdAt: daysAgo(20),
        updatedAt: daysAgo(20),
    },
    {
        id: "n10",
        authorId: "user_10",
        recipientId: "user_1",
        type: "LIKE",
        targetId: "comment_3",
        targetType: "COMMENT",
        isRead: true,
        createdAt: daysAgo(30),
        updatedAt: daysAgo(30),
    },
];
