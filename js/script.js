const foxAlive = 10;
const foxDead = 11;

const fieldCellClean = 0; // O
const fieldCellValue = 1;
const fieldCellMarked = 2; // X

const foxies = [];
const fieldGame = [];

for (let i = 0, lim = 100, offset = 1; i < lim; i += offset) {
  // console.log(i);
  fieldGame[i] = 0;
}

console.log(fieldGame);

for (let i = 0; i < 7; i += 1) {
  foxies[i] = Math.round(Math.random() * (99 - 0) + 0);
}

console.log(foxies);

// ---- from inet

// let arry = [1, 2, 17, 3, 4, 5, 5];
let arry = foxies;
let resultToReturn = false;
for (let i = 0; i < arry.length; i++) {
  // nested for loop
  for (let j = 0; j < arry.length; j++) {
    // prevents the element from comparing with itself
    if (i !== j) {
      // check if elements' values are equal
      if (arry[i] === arry[j]) {
        // duplicate element present
        resultToReturn = true;
        console.log(arry[i]);
        arry[i] = Math.round(Math.random() * (99 - 0) + 0);
        console.log(arry);
        // terminate inner loop
        // break;
      }
    }
  }
  // terminate outer loop
}

for (const key of foxies) {
  console.log(`The key is ${key}`);
}
