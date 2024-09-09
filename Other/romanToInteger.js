/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
*/

function romanToInteger(str) {
    let list = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let sum = 0;
    let prevValue = 0;
    for (let i = 0; i < str.length; i++) {
        currentValue = list[str[i]];
        if (currentValue > prevValue) {
            sum = sum + (currentValue - 2 * prevValue); // If current value is larger than previous value then sustract 2 times of previous value from current value
        } else {
            sum += currentValue;
        }

        prevValue = currentValue; // `Always set current value to  previous value
    }


    console.log(sum);
}

// romanToInteger("III");
// romanToInteger("LVIII");
romanToInteger("MCMXCIV");