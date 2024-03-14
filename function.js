function greeting() {
return console.log ('Hello World!')
}
//NOTE - you need to invoke the function line five is invoking the function
//console.log(greeting())

//NOTE - write a function that adds any two numbers and returns a result.

function addition() {
let a = 1
let b = 1
return console.log (a + b)
}
//console.log(addition())

// the key was any two numbers, the correct code is below which allows any numbers to be added
function sum(a,b) {
return a+b
}
//console.log (sum(2,3))

/* write a function that takes an array and checks whther the sum of its elements is even or dd,
the value should return "even" or "odd"*/

function checkArraySum(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    if (sum%2 == 0) {
        return console.log(sum,'even')
    } else {
        return console.log(sum, 'odd')
    }
}
//console.log(checkArraySum([2, 3, 5, 1, 11]))

/*!SECTION write a function that takes an array of items and returns intergers.
// ['Ali', 3, 'Isaac', 5, 9] -> [3,5,9]*/

function onlyInteger(arr) { // declared the function, named fucntion and defined it as arr
let integer = [] // let interger and defined it as an undefined array
for (let i= 0; i < arr.length; i++) {
    if(Number.isInteger(arr[i])) {
        integer.push(arr[i])
    }
}
return integer
}

//console.log(onlyInteger(['Ali', 3, 'Isaac', 5, 9]))

/*!SECTION write a function that takes an array with number and returns an array with the elements multiplied by 2
arrayByTwo([2,54]) -> [4,10,8]*/

function arrayByTwo(arr) {
for (i= 0; i < arr.length; i++) {
    arr[i] *= 2
}
return arr
}
//console.log(arrayByTwo([2,5,4]))

const onelineArray = (arr) => arr.map(el => el * 2)

//console.log(onelineArray([2,5,4]))

/* create a function which takes two strings (p1 and p2) as arguments and returns a string
stating the winner (rock, paper, scissors)

*NOTE - Game conditions
if p1 wins return the string "the winner is P1"
if p2 wins return the string "the winner is P2"
if they are the same then return "It's a draw"
=== is a stick comparison*/

function RPS(p1, p2) {
    if (p1 === p2) return 'Its a draw'

   else if (p1 === 'Rock' && p2 === 'Scissors') return 'The winner is p1'
    else if (p1 === 'Paper' && p2 === 'Rock') return 'The winner is p1'
    else if (p1 === 'Scissors' && p2 === 'paper') return 'The winner is p1'

    else return 'The winner is p2'
}

//console.log(RPS('Scissors', 'paper'))

//ANCHOR - ES6 JavaScript built in functions.
function RPSTwo (p1, p2){

    let obj = {
        Rock: 'Scissors',
        Scissors: 'Paper',
        Paper: 'Rock'
    }
    return p1 === p2 ? "It's a draw" : obj[p1] === p2 ? "The winner is p1" : "The winner is p2"
}
//console.log(RPSTwo('Paper', 'Scissors'))

//ANCHOR - JS built in function includes ()
function RPSThree(p1, p2) {
    const wins = ['RockScissors', 'PaperRock', 'ScissorsPaper']
    return p1 === p2 ? "It's a draw" : `The winner is ${wins.includes(p1 + p2) ? 'p1' : 'p2'}`
}

console.log(RPSThree('Paper', 'Rock'))