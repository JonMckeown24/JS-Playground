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
    let sumTotal = 0;

    for (let i = 0; i < arr.length; i++) {
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

console.log(sumMinArrays([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]))