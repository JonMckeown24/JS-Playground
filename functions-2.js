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

console.log(arrTypes([1,3, "Ali", "what"]))

//map = The map() method of Array instances creates a new array populated with the results of calling a provided 
//function on every element in the calling array.