/**
 * Replaces all occurrences of a search string with a replacement string
 * using the split() and join() method chaining, avoiding regular expressions.
 * * @param inputString The string to modify.
 * @param search The substring to find.
 * @param replacement The string to substitute with.
 * @returns The new string with all replacements made.
 */
function replaceAllWithoutRegex(
	inputString: string,
	search: string,
	replacement: string,
): string {
	// 1. Split the original string using the 'search' string as the delimiter.
	//    Example: "some things some".split("some")
	//    -> ["", " things ", ""]
	const parts = inputString.split(search);

	// 2. Join the resulting array back together using the 'replacement' string
	//    as the glue between the parts.
	//    Example: ["", " things ", ""].join("s")
	//    -> "s things s"
	return parts.join(replacement);
}

const originalString = "some things some";
const searchString = "some";
const replacementString = "s";

const result = replaceAllWithoutRegex(
	originalString,
	searchString,
	replacementString,
);

console.log(`Original String: "${originalString}"`);
console.log(`Search for: "${searchString}"`);
console.log(`Replace with: "${replacementString}"`);
console.log(`Result: "${result}"`);
// Output: "s things s"
