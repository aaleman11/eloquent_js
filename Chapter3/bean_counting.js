/*
    Write function, countBs, that takes a string and returns the number of uppercase B's
    Write second function, countChar, that takes in a string and char, and return the number of uppercase letters equal to the char
    Then rewrite countBs to use the countChar function
*/


function countBs(word){

    let numberOfBs = 0

    if(word != undefined){                                              //Check word ONLY if argument is passed
        
        if(word.length == 1){                                           //Check for single letter words
            if(word === 'B') numberOfBs += 1
        }
        else{
            for(let i = 0; i < word.length - 1; i++){
                if(word.charAt(i) === 'B') numberOfBs += 1              //Increment only if Strictly 'B'
            }
        }
    }
    return numberOfBs
}

console.log('--------1st Version of countBs function--------')
console.log(countBs())
console.log(countBs('B'))
console.log(countBs('b'))
console.log(countBs('abcba'))
console.log(countBs('aBcBa'))
console.log()

function countChar(word, letter){

    let numberOfLetters = 0

    if(letter != undefined){                            //Check to see if comparison letter has been passed through

        if(word.length == 1){                           //Check for single letter words
            if(word === letter) numberOfLetters += 1
        }
        else{
            for(let i = 0; i < word.length - 1; i++){
                if(word.charAt(i) === letter) numberOfLetters += 1
            }
        }

    }

    return numberOfLetters

}

console.log('--------countChar function--------')
console.log(countChar('bologna'))              //Check for second argument
console.log(countChar('bologna', 'o'))
console.log(countChar('bologna', 'O'))
console.log(countChar('bolOgna', 'O'))
console.log()


function countBs2(word){                                //Updated countBs function calls countChar function to do the work

    return countChar(word, 'B')

}

console.log('--------Updated Version of countBs function--------')
console.log(countBs())
console.log(countBs('B'))
console.log(countBs('b'))
console.log(countBs('abcba'))
console.log(countBs('aBcBa'))
console.log()