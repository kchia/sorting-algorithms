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

var selectionSort = function (array) {
  var len = array.length;
  if(!Array.isArray(array)) {
  	return array;
  }

  var swap = function(arr, index, minimum) {
  	
  };
  
  for(var i = 0; i < len - 1; i++) {
  	var min = i;
  	for(var j = 0; j < len; j++) {
  		if(array[j] < array[min]) {
  			min = j;
  		}
  	}
  	swap(array, i, min);
  }  
};