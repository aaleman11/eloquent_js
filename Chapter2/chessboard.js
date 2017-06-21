//Print an 8x8 board

let boardSize = 8

for(let i = 0; i < boardSize; i++){         //Outer loop keeps track of rows

    let row = ''
    if(i % 2 === 1) row += ' '

    for(let j = 0; j < boardSize; j++){     //Inner loop keepts track of columns

        if(j % 2 === 0) row += '#'
        else row += ' '

    }  
    console.log(row)  
}