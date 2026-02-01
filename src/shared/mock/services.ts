import { IService } from "../types/service";

export const services: IService[] = [
    {
        id: "service_001",
        name: "Маникюр классический",
        description:
            "Классический маникюр с покрытием гель-лаком. Включает обработку кутикулы, придание формы ногтям и покрытие выбранным цветом.",
        duration: 60,
        price: 2500.0,
        isActive: true,
        masterId: "master_001",
        category: "Маникюр",
        imageUrl:
            "https://xn--80aaglxfohdbsghp0c4a1e.xn--p1ai/wp-content/uploads/2025/11/professional-neil-arta-rabotausii-nad-nogtami-klienta-4-1.jpg",
    },
    {
        id: "service_002",
        name: "Маникюр с укреплением",
        description:
            "Маникюр с укреплением ногтевой пластины гелем. Идеально для слабых и ломких ногтей.",
        duration: 75,
        price: 3200.0,
        isActive: true,
        masterId: "master_001",
        category: "Маникюр",
    },
    {
        id: "service_003",
        name: "Аппаратный маникюр",
        description:
            "Бесконтактный маникюр с использованием аппарата. Безопасно и гигиенично.",
        duration: 70,
        price: 2800.0,
        isActive: true,
        masterId: "master_001",
        category: "Маникюр",
    },
    {
        id: "service_004",
        name: "Педикюр классический",
        description:
            "Комплексный уход за стопами. Включает обработку ногтей, удаление огрубевшей кожи и покрытие лаком.",
        duration: 90,
        price: 3500.0,
        isActive: true,
        masterId: "master_001",
        category: "Педикюр",
    },
    {
        id: "service_005",
        name: "Педикюр аппаратный",
        description:
            "Аппаратная обработка стоп с использованием фрез. Тщательное удаление натоптышей и мозолей.",
        duration: 100,
        price: 4000.0,
        isActive: true,
        masterId: "master_001",
        category: "Педикюр",
    },
    {
        id: "service_006",
        name: "Наращивание ногтей",
        description:
            "Наращивание ногтей гелем на типсы или формы. Возможно создание любой длины и формы.",
        duration: 120,
        price: 4500.0,
        isActive: true,
        masterId: "master_001",
        category: "Наращивание",
    },
    {
        id: "service_007",
        name: "Коррекция нарощенных ногтей",
        description:
            "Коррекция гелевых ногтей. Заполнение отросшей зоны и обновление покрытия.",
        duration: 90,
        price: 3800.0,
        isActive: true,
        masterId: "master_001",
        category: "Наращивание",
    },
    {
        id: "service_008",
        name: "Дизайн ногтей (простой)",
        description:
            "Декор одного ногтя: стразы, фольга, слайдер-дизайн, рисунок одной иглой.",
        duration: 15,
        price: 500.0,
        isActive: true,
        masterId: "master_001",
        category: "Дизайн",
    },
    {
        id: "service_009",
        name: "Дизайн ногтей (сложный)",
        description:
            "Художественная роспись, объемный дизайн, инкрустация камнями, комбинированные техники.",
        duration: 30,
        price: 1000.0,
        isActive: true,
        masterId: "master_001",
        category: "Дизайн",
    },
    {
        id: "service_010",
        name: "Снятие гель-лака",
        description:
            "Аккуратное снятие гель-лака без повреждения ногтевой пластины.",
        duration: 20,
        price: 700.0,
        isActive: true,
        masterId: "master_001",
        category: "Дополнительно",
    },
];
