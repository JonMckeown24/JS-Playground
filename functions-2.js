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

console.log(ArraysDuplicateNumbers2([1, 2, 3, 4, 5, 6, 5, 1]))

