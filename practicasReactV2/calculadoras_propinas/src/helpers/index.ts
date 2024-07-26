export function formatCurrency(amount: number) {
    return new Intl.NumberFormat("es-VE", {
        style: "currency",
        currency: "VES",
        maximumFractionDigits: 2,
    }).format(amount)
}

// export function formatCurrency(amount: number) {
//     return new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//         maximumFractionDigits: 0,
//     }).format(amount)
// }