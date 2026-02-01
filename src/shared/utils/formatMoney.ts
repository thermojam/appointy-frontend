export function formatMoney(price: number) {
    return price.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
        maximumFractionDigits: 2,
        minimumFractionDigits: 0,
    });
}
