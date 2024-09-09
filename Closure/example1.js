// Create a counter function that returns a function that increments a counter every time it's called:

function createCounter() {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
    }
}

let counter = createCounter();
counter();
counter();
counter();
counter();
counter();