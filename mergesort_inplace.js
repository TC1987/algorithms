
const merge = (array, start, middle, end, auxArray) => {
	let i = start;
	let j = middle + 1;
	let k = start;

	while (i <= middle && j <= end) {
		if (auxArray[i] <= auxArray[j]) {
			array[k++] = auxArray[i++];
		} else {
			array[k++] = auxArray[j++];
		}
	}

	while (i <= middle) {
		array[k++] = auxArray[i++];
	}

	while (j <= end) {
		array[k++] = auxArray[j++];
	}
}

const mergeSort = (
	array,
	start,
	end,
	auxArray
	) => {
		if (start === end) return;

		const middle = Math.floor((start + end) / 2);
		mergeSort(auxArray, start, middle, array);
		mergeSort(auxArray, middle + 1, end, array);
		merge(array, start, middle, end, auxArray);
}

const mergeSortHelper = array => {
	if (array.length <= 1) {
		return array;
	}

	const auxArray = [...array];
	mergeSort(array, 0, array.length - 1, auxArray);
	console.log(array);
}

console.log(mergeSortHelper([5, 1, 6, 2, 4, 3, 0, 20, 10]));