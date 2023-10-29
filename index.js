const CC = require('currency-converter-lt')
const myMath = require('./myMath')//подключение моего собственного модуля

let currencyConverter = new CC({from: "USD", to:"JPY"})


currencyConverter.convert(100).then((resp) => {//converting using Promises
    console.log(resp)
})

const a = 10, b = 7

console.log(`Sum ${a} + ${b} = ${myMath.sum(a, b)}`)
console.log(`Minus ${a} - ${b} = ${myMath.minus(a, b)}`)
