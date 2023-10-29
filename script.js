// Function to remove duplicate elements from an array.
function removeDuplicates(arr) {
	const nonDuplicatesArr = [];

	arr.forEach(item => {
		const lowercaseItem = item.toLowerCase();

		if (!nonDuplicatesArr.some(checkDuplicateItem => checkDuplicateItem.toLowerCase() === lowercaseItem)) {
			nonDuplicatesArr.push(item);
		}
	});

	return nonDuplicatesArr;
}

// Example of using the function.
const arr1 = ['html', 'css', 'html', 'js'];
const arr2 = ['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss'];
const arr3 = ['html', 'css', 'html', 'HTML', 'js']; // Added an uppercase duplicate.
const cleanArr1 = removeDuplicates(arr1);
const cleanArr2 = removeDuplicates(arr2);
const cleanArr3 = removeDuplicates(arr3);

// Outputing the result to the console.
console.log(`Clean Array arr1:`, cleanArr1);
console.log(`Clean Array arr2:`, cleanArr2);
console.log(`Clean Array arr3:`, cleanArr3);
