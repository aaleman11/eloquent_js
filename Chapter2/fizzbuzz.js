/*
    Write program that prints the numbers for 1 to 100.
    If a number is divisible by 3, print 'Fizz'.
    If a number is divisible by 5, print 'Buzz'.
    If a number is divisible by both 3 and 5, print 'FizzBuzz'.
*/

for(let i = 0; i <= 100; ++i){
    if(i % 15 == 0) console.log('FizzBuzz')
    else if(i % 3 == 0) console.log('Fizz')
    else if(i % 5 == 0) console.log('Buzz')
    else console.log(i)
}