let result = [];

const combinationsUtil = (arr, data, start, end, index, r) => {
  if (index === r) {
    result.push(data.slice(0, r))
    // console.log(data.slice(0, r).join(','));
    return;
  }

  for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
    data[index] = arr[i];
    combinationsUtil(arr, data, i + 1, end, index + 1, r);
  }
}

const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  };

const combinations = async (arr, n, r) => {
  const data = new Array(r);
  await combinationsUtil(arr, data, 0, n - 1, 0, r);

  console.log(shuffle(result))
}

// Example usage:
const arr = [
  // ...batsmen,
  // ...allRounder,
  // ...bowlers
  'B Azam', 'F Zaman', 'Dhaliwal', 'Kirton', 'Johnson'
];

const n = arr.length;
const r = 2;
console.log(`Combinations of ${r} elements from array [${arr}]:`);
combinations(arr, n, r);

[
  // [ 'Kirton', 'Johnson' ],
  // [ 'F Zaman', 'Johnson' ],
  [ 'B Azam', 'F Zaman' ],
  // [ 'Dhaliwal', 'Johnson' ],
  // [ 'F Zaman', 'Dhaliwal' ],
  [ 'B Azam', 'Johnson' ],
  [ 'B Azam', 'Kirton' ],
  [ 'B Azam', 'Dhaliwal' ],
  [ 'F Zaman', 'Kirton' ],
  // [ 'Dhaliwal', 'Kirton' ]
]

// [
//   [ 'Afridi', 'Rauf', 'Amir', 'Gordon', 'Siddiqui' ],
//   [ 'Afridi', 'Shah', 'Rauf', 'Gordon', 'Siddiqui' ],
//   [ 'Shah', 'Rauf', 'Amir', 'Siddiqui', 'Sana' ],
//   [ 'Afridi', 'Shah', 'Rauf', 'Amir', 'Siddiqui' ],
//   [ 'Shah', 'Amir', 'Gordon', 'Siddiqui', 'Sana' ],
//   [ 'Shah', 'Rauf', 'Amir', 'Gordon', 'Sana' ],
//   [ 'Afridi', 'Amir', 'Gordon', 'Siddiqui', 'Sana' ],
//   [ 'Afridi', 'Shah', 'Amir', 'Gordon', 'Sana' ],
//   [ 'Rauf', 'Amir', 'Gordon', 'Siddiqui', 'Sana' ],
//   [ 'Afridi', 'Shah', 'Gordon', 'Siddiqui', 'Sana' ],
//   [ 'Shah', 'Rauf', 'Gordon', 'Siddiqui', 'Sana' ],
//   [ 'Afridi', 'Rauf', 'Gordon', 'Siddiqui', 'Sana' ],
//   [ 'Afridi', 'Shah', 'Amir', 'Gordon', 'Siddiqui' ],
//   [ 'Afridi', 'Shah', 'Rauf', 'Gordon', 'Sana' ],
//   [ 'Afridi', 'Shah', 'Amir', 'Siddiqui', 'Sana' ],
//   [ 'Afridi', 'Shah', 'Rauf', 'Siddiqui', 'Sana' ],
//   [ 'Shah', 'Rauf', 'Amir', 'Gordon', 'Siddiqui' ],
//   [ 'Afridi', 'Shah', 'Rauf', 'Amir', 'Sana' ],
//   [ 'Afridi', 'Rauf', 'Amir', 'Gordon', 'Sana' ],
//   [ 'Afridi', 'Shah', 'Rauf', 'Amir', 'Gordon' ],
//   [ 'Afridi', 'Rauf', 'Amir', 'Siddiqui', 'Sana' ]
// ]