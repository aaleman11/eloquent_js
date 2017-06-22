/*
    1) Write a range function that takes two arguments, start and end, and returns array containing 
        all the numbers from start up to (and including) end
    2) Write a sum function that takes an array of numbers and returns the sum of these numbers
    3) Modify range function to including a step value, which would go from start and increment by the
        step value. Step can also be a negative value.
*/


function range(start, end, step){

    let values = []

    if(arguments.length < 2){                        //Check to see if enough arguments are passed through the function
        return values
    }
    else if (step == undefined){                     //Check if step in included
        values = pushValuesToArrayWithoutStep(start, end, values)
    }
    else{ 
        values = pushValuesToArrayWithStep(start, end, step, values)
    }
    
    return values
}

//Helper function to push values to array without step
function pushValuesToArrayWithoutStep(start, end, list){

    if(start < end){
        for(let i = start; i <= end; ++i){
            list.push(i)
        }
    }
    else if(start > end){
        for(let i = start; i >= end; --i){
            list.push(i)
        }
    }
    else{                                               //If start and end are equal
        list.push(start)
    }
        
    return list
}

//Helper function to push values to array with step
function pushValuesToArrayWithStep(start, end, step, list){

    if(step < 0) step *= -1

    if(start < end){
        for(let i = start; i <= end; i += step){
            list.push(i)
        }
    }
    else if(start > end){
        for(let i = start; i >= end; i -= step){
            list.push(i)
        }
    }
    else{                                               //If start and end are equal
        list.push(start)
    }

    return list
}

console.log('--------range function without step--------')
console.log(range(2, 10))
console.log(range(10, 2))
console.log(range(10, 10))
console.log()

console.log('--------range function with step--------')
console.log(range(1, 10, 2))
console.log(range(5, 2, -1))
console.log(range(10, 1, 2))
console.log(range())                        //No args


function sum(values){

    let sum = 0

    if(arguments.length != 1){              //Must pass in an array
        return 0
    }
    else{
        for(let i = 0; i < values.length; i++){
            sum += values[i]
        }
    }

    return sum

}

console.log('--------sum function--------')
console.log(sum())                      //No args
console.log(sum([1, 2, 3, 4, 5]))
console.log(sum(range(1, 10)))          //range function inside sum function
console.log()