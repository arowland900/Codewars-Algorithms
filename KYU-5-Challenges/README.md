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

This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).

Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

For example, with n=7 and k=3 josephus(7,3) should act this way.

```
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
```

So our final result is:

`josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]`
For more info, browse the [Josephus Permutation](http://en.wikipedia.org/wiki/Josephus_problem) page on wikipedia; related kata: [Josephus Survivor](http://www.codewars.com/kata/josephus-survivor).

---

# Challenge 4

### Link to Challenge: [Number of Trailing Zeros of N!](https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript)

**Number of Trailing Zeros of N!**

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

`N! = 1 * 2 * 3 * ... * N`

Be careful `1000!` has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples

```
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
```

---

# Challenge 5

### Link to Challenge: [Complete The Triangle Patter](https://www.codewars.com/kata/58281843cea5349c9f000110/train/javascript)

**Complete The Triangle Patter**

Give you two number `m` and `n` (two positive integer, m < n), make a triangle pattern with number sequence `m to n`. The order is clockwise, starting from the top corner, like this:

```
 When m=1 n=10  triangle is:
    1
   9 2
  8 0 3
 7 6 5 4
```

Note: The pattern only uses the last digit of each number; Each row separated by "\n"; Each digit separated by a space; Left side may need pad some spaces, but don't pad the right side; If `m to n` can not make the triangle, return `""`.

Some examples:

```
makeTriangle(1,3) should return:
 1
3 2

makeTriangle(6,20) should return: 
    6
   7 7
  6 8 8
 5 0 9 9
4 3 2 1 0

makeTriangle(1,12) should return ""
```