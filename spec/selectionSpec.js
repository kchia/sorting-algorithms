describe('selectionSort', function() {

  it('should be a function', function(){
    expect(selectionSort).to.exist;
    expect(selectionSort).to.be.a('function');
  });

  it('should return an array', function(){
    var result = selectionSort(testingTransform([1,2,3]));
    expect(result).to.exist;
    expect(result).to.be.an.instanceof(Array);
  });

  it('should return the original array', function(){
    var array = testingTransform([3, 2, 1]);
    var result = selectionSort(array);
    // This means that the array is sorted in-place;
    // no copies are made, and the original, modified array is returned.
    expect(array).to.be.eql(result);
  });

  // Note: Any comparison here needs to use eql. Otherwise Mocha will test for
  // reference equality and will fail, as we create new arrays.

  it('should sort an array numerically by value property', function() {
    var array = testingTransform([1, 100, 2, 43, 21]);
    selectionSort(array);
    expect(array).to.eql([
      {value: 1, i: 0},
      {value: 2, i: 2},
      {value: 21, i: 4},
      {value: 43, i: 3},
      {value: 100, i: 1},
    ]);
    array = testingTransform([24.3, 24.7, 23, 9]);
    selectionSort(array);
    expect(array).to.eql([
      {value: 9, i: 3},
      {value: 23, i: 2},
      {value: 24.3, i: 0},
      {value: 24.7, i: 1},
    ]);
  });

  it('should handle presorted arrays', function() {
    var array = testingTransform([5, 4, 3]);
    selectionSort(array);
    expect(array).to.eql([
      {value: 3, i: 2},
      {value: 4, i: 1},
      {value: 5, i: 0},
    ]);
    array = testingTransform([1, 2, 3]);
    selectionSort(array);
    expect(array).to.eql([
      {value: 1, i: 0},
      {value: 2, i: 1},
      {value: 3, i: 2},
    ]);
  });

  it('should handle negative numbers', function() {
    var array = testingTransform([0, 1, -1]);
    selectionSort(array);
    expect(array).to.eql([
      {value: -1, i: 2},
      {value: 0, i: 0},
      {value: 1, i: 1},
    ]);
  });

  it('should be a stable sort', function() {
    var array = testingTransform([1, 5, 1, 5]);
    selectionSort(array);
    expect(array).to.eql([
      {value: 1, i: 0},
      {value: 1, i: 2},
      {value: 5, i: 1},
      {value: 5, i: 3},
    ]);
  });
});

// This will transform an array of numbers into an array of valid objects.
function testingTransform(array) {
  var transform = [];
  
  for (var i = 0; i < array.length; i++)
    transform.push({value: array[i], i: i});

  return transform;
};