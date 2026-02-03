export interface IService {
    id: string;
    createdAt: string;
    updatedAt: string;

    name: string;
    description?: string;
    duration: number;
    price: number;
    isActive: boolean;
    imageUrl?: string;
    masterId?: string;
    category?: string;
}
