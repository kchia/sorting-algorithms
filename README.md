# Sorting Algorithms &  Complexity

Sorting Algorithims frequently show up in technical assessments when interviewing for engineering positions since they are typically representative of various time and space complexities.In this repository, we will be covering in-memory sorting for arrays.


Consider these trivial sorting examples:

```
var prices = [182,142,101,192,199];

prices.sort()

console.log(prices);
// => [101, 142, 182, 192, 199]

prices.sort(function(a,b){
  return b - a;
})

console.log(prices);
// => [199, 192, 182, 142, 101]
```

This utility method on the native javascript Array prototype takes care of the complexity behind the actual sorting, but under the hood there are dozens of different algorithims to actually solve the problem, each with their advantages and disadvantages depending on what is being optimzed.

Futher consider the approach you would take to sort the prices in the example above if you were to do it by hand.  What strategy would you use? One possibility is to have a swap method that switches two numbers in place and to start at the begining of the array, iterating through the array looking for the next item in the sequence and swapping that value in place for the current index.  This alogorithim would give you a working solution, but it would have obvious drawbacks since you'd need to iterate over the array n*n times.

In this sprint, you'll be solving various sorting algorithims and identifying the time complexity of each.  In so doing, you'll be able to improve your approach to algorithims to think in terms of efficiency and complexity instead of just brute forcing your way to a working solution like the example above. 

## Basic Requirements

Implement each with your own functions in `src/[algorithmName].js`, and make the specs pass.

#### Part I:
- [ ] bubble
- [ ] insertion
- [ ] selection
- [ ] merge
- [ ] quickSort

#### Extra Credit:
- [ ] shell
- [ ] heap