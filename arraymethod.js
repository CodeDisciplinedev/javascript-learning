// Array Methods in JavaScript

// FOR LOOP
const fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach METHOD
// Executes a function for each array element (does not return a new array).
fruits.forEach((item) => console.log(item));

// MAP METHOD
// Creates a new array by applying a function to each element.
const fruits2 = fruits.map((item) => {
  console.log(item);
  return item;
});
console.log(fruits2);

// CONCAT METHOD
// Combines multiple arrays into one.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = array1.concat(array2, array3);
console.log(mergedArray);

// PUSH METHOD
// Adds an element at the end of the array.
const countries = ["USA", "Canada", "UK"];
countries.push("Australia");
console.log(countries);

// POP METHOD
// Removes the last element from the array.
countries.pop();
console.log(countries);

// SHIFT & UNSHIFT
// shift() removes the first element, while unshift() adds an element at the beginning.
const numbers = [1, 2, 3];
const firstElement = numbers.shift();
console.log(numbers); // [2,3]
console.log(firstElement); // 1

numbers.unshift(1);
console.log(numbers); // [1,2,3]

// SPLICE METHOD
// Adds or removes elements at a specific index.
const fruitsList = ["apple", "banana", "mango", "orange"];
fruitsList.splice(2, 0, "lemon"); // Adds "lemon" at index 2
console.log(fruitsList);

const deletedItems = fruitsList.splice(2, 2); // Removes 2 elements from index 2
console.log(deletedItems);
console.log(fruitsList);

// SLICE METHOD
// Extracts a portion of an array without modifying the original array.
const slicedFruits = fruitsList.slice(1, 3);
console.log(slicedFruits);

// JOIN METHOD
// Converts an array into a string.
const fruitString = fruitsList.join(", ");
console.log(fruitString);

// EVERY METHOD
// Checks if all elements satisfy a condition.
const numbersArray = [1, 2, 3, 7, 9, 10];
console.log(numbersArray.every((num) => num < 11)); // true

// FILTER METHOD
// Creates a new array with elements that satisfy a condition.
const words = ["spray", "limit", "elite", "move", "limit", "movement"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords);

// INDEXOF & LASTINDEXOF
// Finds the index of the first and last occurrence of an element.
const items = ["banana", "mango", "apple", "lemon", "apple"];
console.log(items.indexOf("apple")); // 2
console.log(items.lastIndexOf("apple")); // 4

// REDUCE METHOD
// Reduces an array to a single value (sum, product, etc.).
const sumArray = [1, 2, 3, 4, 5, 6];
const totalSum = sumArray.reduce((prev, curr) => prev + curr);
console.log(totalSum);

// REVERSE METHOD
// Reverses an array (modifies the original array).
const reverseArray = [1, 2, 3, 4];
reverseArray.reverse();
console.log(reverseArray);

// SORT METHOD
// Sorts an array (by default, it sorts as strings).
const unsortedNumbers = [2, 1, 8, 4, 9, 6];
unsortedNumbers.sort((a, b) => a - b); // Sorting numerically
console.log(unsortedNumbers);

// TO STRING METHOD
// Converts an array to a string.
const numberArray = [2, 1, 8, 4, 9, 6];
const numberString = numberArray.toString();
console.log(numberString);

// AT METHOD (ES2022 Feature)
// Retrieves an element at a specific index.
console.log(numberArray.at(-1)); // Gets last element

// FIND METHOD
// Returns the first element that satisfies a condition.
const foundNumber = numberArray.find((num) => num > 2);
console.log(foundNumber);

// SOME METHOD
// Checks if at least one element satisfies a condition.
console.log(numberArray.some((num) => num > 5)); // true