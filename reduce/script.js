const cart = [
    { productName: 'Abóbora', valuePerKg: 5, kg: 1 },
    { productName: 'Pepino', valuePerKg: 3.55, kg: 1 },
    { productName: 'Limão', valuePerKg: 1.2, kg: 1 },
    { productName: 'Abacate', valuePerKg: 5.4, kg: 1 },
    { productName: 'Morango', valuePerKg: 11.9, kg: 1 },
]

const cartTotal = cart.reduce((total, product) => {
    return total + (product.valuePerKg * product.kg)
}, 0 )

console.log(cartTotal)