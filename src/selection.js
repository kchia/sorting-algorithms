/**
 * Selection sort loops over positions in the array.  
 *
 * Selection sort:
 *    Takes in an array.
 *    Loops over positions in an array.
 *    For each position, it finds the index of the minimum value
 *      in the subarray starting at that position.
 *    Swaps the values at the position and at the minimum index.
 */

var swap = function(arr, index, minimum) {
  var temp = arr[index];
  arr[index] = arr[minimum];
  arr[minimum] = temp;
  return arr;  	
};

var selectionSort = function (array) {
  var len = array.length;
  if(!Array.isArray(array)) {
    return array;
  }

  for(var i = 0; i < len - 1; i++) {
  	var min = i;
  	for(var j = i + 1; j < len; j++) {
  		if(array[j].value < array[min].value) {
  			min = j;
  		}
  	}

    if(min !== i) {
      swap(array, i, min);
    }
  }
  return array;  
};