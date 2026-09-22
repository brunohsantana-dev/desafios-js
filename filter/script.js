// FILTER
// Percorre um array e cria um NOVO array
// apenas com os itens que passam em uma condição.

// true  -> item fica
// false -> item sai

const numbers = [1, 2, 3, 4, 5]

const filteredNumbers = numbers.filter(number => {
    return number > 3
})

console.log(filteredNumbers)
// [4, 5]


//SE LIGA AQUI:
const novoArray = arrayOriginal.filter(item => {
    return condição
})