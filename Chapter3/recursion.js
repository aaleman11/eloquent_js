/*
    Write a recursive function, isEven, that can test whether a number is odd or even by using the % operator
*/

function isEven(number){

    if(number < 0) number *= -1                     //Negative numbers would cause an infinite loop with this function. Convert to positive.

    if(number === 0) return true                    //Base cases: if number is 0, it is even. if number is 1, it is odd.
    else if(number === 1) return false
    else return(isEven(number - 2))                 //Subtract 2 and call function until it reaches base cases

}

console.log(isEven(50))             //Even number
console.log(isEven(75))             //Odd number
console.log(isEven(-23))            //Negative odd number
console.log(isEven(-100))           //Negative even number