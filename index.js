/**
 * Write a numbersInRange(min, max) generator that iterates over all numbers from min up to, but not including, max.
 */

function* numbersInRange(min, max) {
  for (let number = min; number < max; number++) {
    yield number;
  }
}

const testFunction = [
  Array.from(numbersInRange(0, 2)),
  Array.from(numbersInRange(1, 3)),
  numbersInRange.constructor.name,
];

console.log(testFunction);