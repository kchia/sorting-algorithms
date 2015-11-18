/**
 * HEAPS EPISODE VI: The Heap Strikes Back
 * =======================================
 *
 * Okay, so it's not that exciting.
 *
 * Heapsort is an algorithm that uses a heap to sort an array. Heapsort works by
 * leveraging a heap's semi-ordered nature; to return an array sorted in
 * ascending order, you'd use a min heap; to sort in descending order, you'd use
 * a max heap.
 *
 * Write a function that uses a heap to sort an array (heapsort!). For time's
 * sake, feel free to reference your old heap implementation.
 *
 * Tip: If you didn't get around to implementing a remove function for your
 * heap, you should start by doing that. You'll need it to implement heapsort.
 */

// var createHeapsort = function(array) {
  // You'll need to implement a heap here.

var swap = function (array, index1, index2) {
	var temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
	return array;
}
var sift = function(heap, i, max) {
	var iLarge, child1, child2;
	while(i < max) {
		iLarge = i;
		child1 = 2*i + 1;
		child2 = child1 + 1;
		if(child1 < max && heap[child1] > heap[iLarge]) {
			iLarge = child1;
		}

		if(child2 < max && heap[child2] > heap[iLarge]) {
			iLarge = child2;
		}

		if(iLarge === i) {return; }
		swap(heap, i, iLarge);
		i = iLarge;
	}
}
// };

var makeHeap = function(array) {
	var i;
	i = Math.floor((array.length / 2) - 1);
	while(i >= 0) {
		sift(array, i, array.length);
		i -= 1;
	}
};

var heapsort = function(array) {
// Your heapsort code goes here.
	makeHeap(array);
	end = array.length - 1;
	while (end > 0) {
		swap(array, 0, end);
		sift(array, 0, end);
		end -= 1;
	}
	return array;
};