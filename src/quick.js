/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

var swap = function(array,index1,index2) {
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
	return array;
};

var partition = function(arr, left, right) {
	var pivot = arr[Math.floor((right + left) / 2)];
	var i = left;
	var j = right;

	while (i <= j) {
		while(arr[i] < pivot) {
			i++;
		}
		while(arr[j] > pivot) {
			j--;
		}
		if( i <= j){
			swap(arr, i, j);
			i++;
			j--;
		}
	}

	return i;
};

var quickSort = function(array, left, right) {
	var index = partition(array, left, right);

	if(array.length < 2) {
		return array;
	}

	if(left < index -1){
		quickSort(array, left, index-1);
	}

	if(index < right) {
		quickSort(array, index, right);
	}

	return array;
};

var quicksort = function(array) {
	return quickSort(array, 0, array.length-1)
};