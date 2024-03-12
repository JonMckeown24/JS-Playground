//SECTION - JavaScript Arrays

//NOTE - Arrays are special types of objects that can be accessed through numbers from zero up to N-1
let arr = []

arr = ['Jon', 1, 'Food', 100]
console.log(arr [2])

//NOTE - push() pop()
//!SECTION push() adding a new item to the end of an array.
arr.push('Joe')
console.log(arr)

//!SECTION pop() removes an item from the end of an array.

let lastItem = arr.pop()
console.log(lastItem)
console.log(arr)


/*ANCHOR -  - JavaScript for loop, the best way to iterate any array mathmatically through a loop for loop needs three
conditions, initiate the loop (counter), bolean condition (true or false) and finally incriment or decrament
*/
for (let i = 0; i < arr.length; i++){
console.log(i, arr[i])
}

//!SECTION add an item to the begining of an array
arr.unshift('apples')
console.log (arr)

//NOTE - remove an item from the begining of an array

let firstItem = arr.shift()
console.log(firstItem)
console.log(arr)

//ANCHOR - JavaScript Iterators
let a = [-5, -4, -3]
let b = 0
let c = [12, 13, 14]

//NOTE - concat() method which is used to join two or more arrays
let result = a.concat(c, b)
console.log(result)

// There is always an approach to refactor code to make mechanics and functionality more clear
let numbers = [2,4,7,8,9]
let isEven = (num) => {
if (num % 2 == 0) {
//console.log(num + ' is even number')
return
} else {
//console.log(num + ' is odd number')
return
}
}

for (let j = 0; j< numbers.length; j++) {
let temp = numbers[j]
if (temp % 2 == 0) {
console.log (temp + ' is even number')
} else {
console.log(temp + ' is odd number')
}}