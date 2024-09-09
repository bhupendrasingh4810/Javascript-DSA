// Create a function that takes a function and a number of milliseconds and returns a new function that calls the original function after the specified number of milliseconds has elapsed:

function a(fn, ms) {
    return function() {
        setTimeout(fn, ms, ...arguments);
    }
}

function sayHi(name) {
    console.log(name);
}

const delayedHi = a(sayHi, 1000);

delayedHi("Amit");