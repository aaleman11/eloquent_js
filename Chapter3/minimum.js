//Create a function that takes two arguments and returns their minimum

let minimum = function(firstNumber, secondNumber){

    let minimumValue = firstNumber                  //First argument assigned by default in case only one argument is passed

    if (firstNumber == undefined && secondNumber == undefined) minimumValue = undefined         //Check for no arguments passed
    else if(secondNumber < firstNumber) minimumValue = secondNumber                             //Compare when two arguments are passed

    return minimumValue
}

console.log(minimum())              //No arguments
console.log(minimum(2))             //One argument
console.log(minimum(-2, 3))          //first number < second number
console.log(minimum(3, -2))          //first number > second number
