// In order to add types to a function, we add a colon to the function paramter
// and declare a type.
// num1: number
// When TypeScript tries to compile this code, for each instance that add is invoked,
// it will check the input types. If they aren't numbers, TS will throw a type error:

// error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.\
// 12 console.log(add(number1, number2))
// Found 1 error.

function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  const result = num1 + num2
  if (showResult) {
    console.log(phrase + result)
  } else {
    return result
  }
}

const number1 = `5`
const number2 = 3.5
const printResult = true
const resultPhrase = "Result is "

add(Number(number1), Number(number2), printResult, resultPhrase)


