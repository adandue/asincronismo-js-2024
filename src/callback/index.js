const sum = (num1, num2) => num1 + num2
const rest = (num1, num2) => num1 - num2
const mult = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2
const calc = (num1, num2, callback) => callback(num1, num2)

console.log(calc(2, 2, sum))
console.log(calc(2, 2, rest))
console.log(calc(2, 2, mult))
console.log(calc(2, 2, div))

setTimeout(() => console.log(`Hello Javascript`), 2000)

const greeting = (name) => console.log(`Hello ${name}`)

setTimeout(greeting, 2000, 'Adan')