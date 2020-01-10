# Challenge 1

### Link to Challenge: [Buddy Pairs](https://www.codewars.com/kata/buddy-pairs/train/javascript)

**Buddy pairs**

You know what divisors of a number are. The divisors of a positive integer n are said to be proper when you consider only the divisors other than n itself. In the following description, divisors will mean proper divisors. For example for `100` they are `1, 2, 4, 5, 10, 20, 25, and 50`.

Let `s(n)` be the sum of these proper divisors of `n`. Call buddy two positive integers such that the sum of the proper divisors of each number is one more than the other number:

`(n, m)` are a pair of buddy if `s(m) = n + 1` and `s(n) = m + 1`

For example `48 & 75` is such a pair:

Divisors of `48` are: `1, 2, 3, 4, 6, 8, 12, 16, 24 --> sum: 76 = 75 + 1`
Divisors of `75` are: `1, 3, 5, 15, 25 --> sum: 49 = 48 + 1`
Task
Given two positive integers start and limit, the function buddy(start, limit) should return the first pair `(n m)` of buddy pairs such that `n` (positive integer) is between start (inclusive) and limit (inclusive); `m` can be greater than limit and has to be greater than `n`

If there is no buddy pair satisfying the conditions, then return "Nothing" or (for Go lang) nil
```
Examples

buddy(10, 50) returns [48, 75] 
buddy(48, 50) returns [48, 75]
```

---

# Challenge 2

### Link to Challenge: [Pick Peaks](https://www.codewars.com/kata/pick-peaks/train/javascript)

**Pick Peaks**

In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array `arr = [0, 1, 2, 5, 1, 0]` has a peak at position 3 with a value of 5 (since `arr[3]` equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: `pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])` should return `{pos: [3, 7], peaks: [6, 3]}` (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! `[1, 2, 2, 2, 1]` has a peak while `[1, 2, 2, 2, 3]` does not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: `pickPeaks([1, 2, 2, 2, 1])` returns `{pos: [1], peaks: [2]}` (or equivalent in other languages)

Have fun!

---

# Challenge 3

### Link to Challenge: [Josephus Permutation](https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript)

**Josephus Permutation**
