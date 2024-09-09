// Create a function that returns a function that takes an argument and returns the sum of that argument and the argument passed to the first function:

function a(x) {
    return function (y) {
        return x + y;
    }
}

console.log(a(1)(3));