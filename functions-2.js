// Create a function that takes an array as a param and returns the types of the elements (data types)
// in a new array

function arrTypes(arr){
    let newArray = []
    for(let i = 0; i<arr.length; i++) {
        newArray[i] = typeof(arr[i])
    }
    return newArray
}

//console.log(arrTypes([1,3, "Ali", "what"]))

// Es6
const arrTypesNew = arr => arr.map(x => typeof x)

//console.log(arrTypes([1,3, "Ali", "what"]))

//map = The map() method of Array instances creates a new array populated with the results of calling a provided 
//function on every element in the calling array.

//Create a function that takes 2-D arrays and returns the sum on min values in each row
/* Ex: sumMinArrays([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
])
output -> 1+6+11 = 18
*/

function sumMinArrays(arr) {
    let sumTotal = 0;// placeholder for counter

    for (let i = 0; i < arr.length; i++) {// outer array
        let y = arr[i][0]
        for(let x = 0; x<arr[i].length; x++) {
            if(y > arr[i][x]) {
                y = arr[i][x]
            }
        }
        sumTotal += y
    }
    return sumTotal
}

/*console.log(sumMinArrays([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]))*/

// ES6

const sumMinArrayNew = arr => arr.reduce((a,b) => a +Math.min(...b),0)

/*console.log(sumMinArrays([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]))*/

/* create a fuction that takes an array, return duplicate numbers in an array.
ArraysDuplicateNumbers ([1,2,3,4,5,6,5,1]) output -> [5,1] */

function findDuplicateNumbers(arr) {
    const duplicates = [];
    const seen = {};

    for (const num of arr) {
        if (seen[num]) {
            duplicates.push(num);
        } else {
            seen[num] = true;
        }
    }

    return duplicates;
}

//console.log(findDuplicateNumbers([1, 2, 3, 4, 5, 6, 5, 1]))
// Below is the ES6 of the es5 above

const findDuplicateNumbers2 = arr => [...new Set(arr.filter((value, index, array) => 
    array.indexOf(value) !== index))];

//console.log(findDuplicateNumbers2([1, 2, 3, 4, 5, 6, 5, 1, 2, 5]));

const ArraysDuplicateNumbers = arr => (
    arr= [... new Set([...arr.filter(num =>
        arr.indexOf(num) !== arr.lastIndexOf(num)
        )])].sort((a,b) => a-b),
        arr.length ? arr: null
)

//console.log(ArraysDuplicateNumbers([1, 2, 3, 4, 5, 6, 5, 1]))
// below is the ES5 of the ES6 above

var ArraysDuplicateNumbers2 = function(arr) {
    arr = arr.filter(function(num, index, array) {
        return array.indexOf(num) !== array.lastIndexOf(num);
    });
    arr = Array.from(new Set(arr));
    arr.sort(function(a, b) {
        return a - b;
    });
    return arr.length ? arr : null;
};

//console.log(ArraysDuplicateNumbers2([1, 2, 3, 4, 5, 6, 5, 1]))

// Create a function that takes an Array of numbers or letters and returns a string
// arrayToString ([6,7,"Ali","Sonny",10]) -> "12345"

function arrayToString(arr) {
    let result = ""
    for(let i=0; i < arr.length; i++) {
        result = result + arr[i]
    }
    return result
}

//console.log(arrayToString([6, 7, "Ali", "Sonny", 10]))

// Create a function that takes an array with numbers. transform that array into a mirror
//arrToMirror([0,2,4,6,8]) output -> ([0,2,4,6,8,6,4,2,0])

function arrayToMirror(arr) {
    for(let i = arr.length-2; i>=0; i--) {
        arr.push(arr[i])
    }
    return arr
}
//console.log(arrayToMirror([0,2,4,6,8]))

//ES6

const toMirror = arr => [...arr, ...arr.reverse().slice(1)]

//console.log(toMirror([0,2,4,6,8]))

//Create a function that returns the total number of arrays inside a given main array.
// totalOfArrays([[1,2,3], [4,5,6]]) -> total number of arrays = 2

function totalOfArrays(arr) {
    let count = 0
    for(let i=0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            count++
        }
    }
    return count
}
//console.log(totalOfArrays([[1,2,3], [4,5,6], 10, []]))

//Create a function that takes a number as an argument and returns an array of numbers
//counting down from the given number to zero

//Ex: arrayCountdown(5) output -> [5,4,3,2,1,0]

function arrayCountDown(num) {
    let array = [];
    for (let i = num; i >= 0; i--) {
        array.push(i);
    }
    return array;

}
//console.log(arrayCountDown(5))

const countDownArray = (num) => Array.from(Array(num+1).keys()).reverse()
console.log(countDownArray(10))