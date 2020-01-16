// In order to add types to a function, we add a colon to the function paramter
// and declare a type.
// num1: number
// When TypeScript tries to compile this code, for each instance that add is invoked,
// it will check the input types. If they aren't numbers, TS will throw a type error:
// error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.\
// 12 console.log(add(number1, number2))
// Found 1 error.
function add(num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = "5";
var number2 = 3.5;
var printResult = true;
var resultPhrase = "Result is ";
add(Number(number1), Number(number2), printResult, resultPhrase);
