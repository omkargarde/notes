/**
 * Counts the frequency of each letter (character) in a string.
 * @param inputString The string to analyze.
 * @returns A Map where keys are the lowercase letters and values are their counts.
 */
function countLetters(inputString: string): Map<string, number> {
	// We'll use a Map for better performance and explicit key typing.
	const letterCounts = new Map<string, number>();

	// 1. Clean and normalize the string: remove spaces and convert to lowercase.
	const cleanedString = inputString.replace(/\s/g, "").toLowerCase();

	// 2. Iterate over the cleaned string
	for (const char of cleanedString) {
		// Optional: Check if the character is an actual letter (a-z).
		// If you want to count numbers, punctuation, etc., skip this check.
		if (char >= "a" && char <= "z") {
			// Get the current count, defaulting to 0 if the key doesn't exist
			const currentCount = letterCounts.get(char) || 0;

			// Increment and set the new count
			letterCounts.set(char, currentCount + 1);
		}
	}

	// Since Maps maintain insertion order, we can optionally convert to an Object
	// for easy JSON serialization in a backend context, but returning the Map is cleaner.
	return letterCounts;
}

// Example usage
const input = "Hello World! This is TypeScript.";
const counts = countLetters(input);

console.log(`Input string: "${input}"`);

// Outputting the result clearly
console.log("Letter Counts:");
// Convert Map to Array of [key, value] pairs, sort by key (alphabetically)
const sortedCounts = Array.from(counts.entries()).sort();

for (const [charasd, count] of sortedCounts) {
	console.log(`'${charasd}': ${count}`);
}
