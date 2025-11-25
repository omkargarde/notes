// Given an array of numbers, return a new array with each number doubled.
let nums = [1, 2, 3, 4];
// Expected: [2, 4, 6, 8]
const doubleOfNums = nums.map((num) => num * 2);
console.log("Given an array of numbers, return a new array with each number doubled.");
console.log("Input::", nums);
console.log("Output::", doubleOfNums);
console.log("---------------------------------");

// Return a new array containing only even numbers.
nums = [1, 2, 3, 4, 5, 6];
// Expected: [2, 4, 6]
const evenNumbersFromNums = nums.filter((num) => num % 2 === 0);
console.log("Return a new array containing only even numbers.");
console.log("Input::", nums);
console.log("Output::", evenNumbersFromNums);
console.log("---------------------------------");

// Find the first word longer than 5 characters.
let words = ["apple", "banana", "kiwi", "strawberry"];
// Expected: "banana"
// const numsEven = nums.filter((num) => num % 2 === 0);
const longWord = words.find((word) => word.length > 5);
console.log("Return a new array containing only even numbers.");
console.log("Input::", words);
console.log("Output::", longWord);
console.log("---------------------------------");

// Use forEach() to log every fruit in uppercase.
const fruits = ["apple", "mango", "grapes"];
// Output: APPLE, MANGO, GRAPES (logged separately)
console.log("Use forEach() to log every fruit in uppercase.");
console.log("Input::", fruits);
console.log("Output::");
fruits.forEach((fruit) => console.log(fruit.toUpperCase()));
console.log("---------------------------------");

// Use reduce() to find the total sum.
nums = [5, 10, 15];
// Expected: 30
const sumOfNums = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Use reduce() to find the total sum.");
console.log("Input::", nums);
console.log("Output::", sumOfNums);
console.log("---------------------------------");

// Use reduce() to find the total sum of even numbers.
nums = [5, 10, 15];
// Expected: 30
const sumOfEvenNums = nums.reduce((acc, curr) => {
	if (curr % 2) {
		return acc;
	}
	return acc + curr;
}, 0);
console.log("Use reduce() to find the total sum of even numbers.");
console.log("Input::", nums);
console.log("Output::", sumOfEvenNums);
console.log("---------------------------------");

// Square each number and keep only results greater than 20.
nums = [2, 4, 5, 7];
// Expected: [25, 49]
const listOfSquares = nums.map((num) => num * num).filter((num) => num > 20);
console.log("Square each number and keep only results greater than 20.");
console.log("Input::", nums);
console.log("Output::", listOfSquares);
console.log("---------------------------------");

// Use every() to check if all ages are 18 or above.
const ages = [22, 19, 25, 17];
// Expected: false
const areAllAdults = ages.every((age) => age > 18);
console.log("Use every() to check if all ages are 18 or above.");
console.log("Input::", ages);
console.log("Output::", areAllAdults);
console.log("---------------------------------");

// Use some() to see if any product has discount > 30%.
const products = [
	{ name: "Shoes", discount: 10 },
	{ name: "Watch", discount: 35 },
	{ name: "Bag", discount: 20 },
];
// Expected: true
const areSomeProductHeavylyDiscounted = products.some((product) => product.discount > 30);
console.log("Use some() to see if any product has discount > 30%.");
console.log("Input::", products);
console.log("Output::", areSomeProductHeavylyDiscounted);
console.log("---------------------------------");

// Use reduce() to count occurrences of each letter.
const letters = ["a", "b", "a", "c", "b", "a"];
// Expected: { a: 3, b: 2, c: 1 }
const occurrencesOfLetters = letters.reduce<Record<string, number>>((acc, curr) => {
	acc[curr] = (acc[curr] || 0) + 1;
	return acc;
}, {});

console.log("Use reduce() to count occurrences of each letter.");
console.log("Input::", letters);
console.log("Output::", occurrencesOfLetters);
console.log("---------------------------------");

// Use map() + filter() to get names of active users only.
const users = [
	{ name: "Omkar", active: true },
	{ name: "Raj", active: false },
	{ name: "Mira", active: true },
];
// Expected: ["Omkar", "Mira"]

const namesOfActiveUsers = users.filter((user) => user.active).map((user) => user.name);
console.log("Use map() + filter() to get names of active users only.");
console.log("Input::", users);
console.log("Output::", namesOfActiveUsers);
console.log("---------------------------------");

// Flatten this nested array into a single array using flat.
let arr = [1, [2, 3], [4, [5, 6]]];
// Expected: [1, 2, 3, 4, [5, 6]]

const flatArr = arr.flat(Infinity);
console.log(" Flatten this nested array into a single array using flat.");
console.log("Input::", arr);
console.log("Output::", flatArr);
console.log("---------------------------------");

// Flatten this nested array into a single array using flat.
arr = [1, [2, 3], [4, [5, 6]]];
// Expected: [1, 2, 3, 4, [5, 6]]

function flatten(arr: number[]): number[] {
	// ts-ignore
	return arr.reduce((acc: number[], curr: number) => {
		if (Array.isArray(curr)) {
			return acc.concat(flatten(curr));
		} else {
			return acc.concat(curr);
		}
	}, []);
}
console.log(" Flatten this nested array into a single array without flat.");
console.log("Input::", arr);
//@ts-ignore:: not important
console.log("Output::", flatten(arr));
console.log("---------------------------------");

// Flatten and remove empty slots
// @ts-ignore
arr = [1, , [2, , 3], [4, [, 5]]];
// Expected: [1, 2, 3, 4, 5]

function flattenAndFilter(arr: number[]): number[] {
	// ts-ignore
	return arr.reduce((acc: number, curr: number) => {
		if (Array.isArray(curr)) {
			return acc.push(flattenAndFilter(curr));
		} else if (curr) {
			return acc.push(curr);
		}
	}, []);
}

console.log("Flatten and remove empty slots");
console.log("Input::", arr);
//@ts-ignore:: not important
console.log("Output::", flattenAndFilter(arr));
console.log("---------------------------------");

// For each number, return [num, num * 2]
arr = [1, 2, 3];
// Expected: [1, 2, 2, 4, 3, 6]
// @ts-ignore
const transformedArray = arr.flatMap((num) => [num, num * 2]);
console.log("For each number, return [num, num * 2]");
console.log("Input::", arr);
console.log("Output::", transformedArray);
console.log("---------------------------------");

// Flatten all words into one array
const sentences = ["hello world", "flat map is cool"];
// Expected: ["hello", "world", "flat", "map", "is", "cool"]

const flattenWords = sentences.flatMap((sentence) => sentence.split(" "));

console.log("Flatten all words into one array");
console.log("Input::", arr);
console.log("Output::", flattenWords);
console.log("---------------------------------");

// Extract all unique tags from posts
let posts = [
	{ id: 1, tags: ["js", "react"] },
	{ id: 2, tags: ["node", "js"] },
	{ id: 3, tags: ["typescript", "react"] },
];
// Expected: ["js", "react", "node", "typescript"]
const deduplicatedTagsList = [...new Set(posts.flatMap((post) => post.tags))];
console.log("Extract all unique tags from posts");
console.log("Input::", posts);
console.log("Output::", deduplicatedTagsList);
console.log("---------------------------------");

// Flatten and sum all numbers inside nested arrays
const data = [1, [2, 3], [4, [5, 6]]];
// Expected: 21
const sum = data.flat(Infinity).reduce((acc, curr) => ((acc as number) + (curr as number), 0));
console.log("Flatten all words into one array");
console.log("Input::", data);
console.log("Output::", sum);
console.log("---------------------------------");
