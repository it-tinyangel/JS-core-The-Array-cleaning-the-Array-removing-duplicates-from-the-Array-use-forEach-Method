// Function to remove duplicate elements from an array.
function removeDuplicates(arr) {
	const cleanedArray = [];

	arr.forEach(item => {
		const lowercaseItem = item.toLowerCase();

		if (!cleanedArray.some(checkItem => checkItem.toLowerCase() === lowercaseItem)) {
			cleanedArray.push(item);
		}
	});

	return cleanedArray;
}

// Example of using the function.
const arr1 = ['html', 'css', 'html', 'js'];
const arr2 = ['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss'];
const arr3 = ['html', 'css', 'html', 'HTML', 'js']; // Added an uppercase duplicate.
const cleanedArray1 = removeDuplicates(arr1);
const cleanedArray2 = removeDuplicates(arr2);
const cleanedArray3 = removeDuplicates(arr3);

// Outputing the result to the console.
console.log(`Cleaned Array1:`, cleanedArray1);
console.log(`Cleaned Array2:`, cleanedArray2);
console.log(`Cleaned Array3:`, cleanedArray3);
