const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

export default function formatCurrency(amount) {
    return formatter.format(amount);
}
