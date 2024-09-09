/*
    Given an integer n, return a string Array answer (1-indexed) where:
    answer[i] == "FizzBuzz" if i is divisible by 3 and 5
    answer[i] == "Fizz" if i is divisible by 3
    answer[i] == "Buzz" if i is divisible by 5
    answer[i] == i as a string if none of the above condition are met
*/

function fizzBuzz(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        let divisibleBy3 = i % 3 === 0;
        let divisibleBy5 = i % 5 === 0;

        if (divisibleBy3 && divisibleBy5) result.push("FizzBuzz");
        else if (divisibleBy3) result.push("Fizz");
        else if (divisibleBy5) result.push("Buzz");
        else result.push(String(i));
    }
    console.log(result);
}

fizzBuzz(5);