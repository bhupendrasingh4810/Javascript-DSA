// Create a function that returns an array of functions that return their index in the array:

function returnArr(n) {
    let indexFunctions = [];

    for (let i = 0; i < n; i++) { 
        indexFunctions.push(function() {
            return i;
        })
    }

    return indexFunctions;
}

const indexFunc = returnArr(5);

console.log(indexFunc[0]());
console.log(indexFunc[1]());
console.log(indexFunc[2]());
console.log(indexFunc[3]());
console.log(indexFunc[4]());
