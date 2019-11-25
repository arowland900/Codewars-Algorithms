# Challenge 1

### Link to Challenge: [TV Channels](https://www.codewars.com/kata/tv-channels/train/javascript)

**TV Channels**

Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function `redarr()`. Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) is assigned to a whole number (objects's key), starting with 0.

Examples:

```
var arr = ["BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
```

```
var arr = ["BBC1", "BBC1", "BBC2", "MTV"];

redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
```

--- 

# Challenge 2

### Link to Challenge: [Vasya - Clerk](https://www.codewars.com/kata/vasya-clerk/train/javascript)

**Vasya - Clerk**

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single `100`, `50` or `25` dollar bill. An "Avengers" ticket costs `25 dollars`.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return `YES`, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return `NO`.

Examples:
```
tickets([25, 25, 50]) // => YES 
```
```
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
```
```
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
```

---

# Challenge 3

### Link to Challenge: [Traverse array elements diagonally](https://www.codewars.com/kata/traverse-array-elements-diagonally/train/javascript)

**Traverse array elements diagonally**

In this kata you're given an `n x n` array and you're expected to traverse the elements diagonally from the bottom right to the top left.

Example `let arr = [[1,6,7],[7,2,4],[3,5,9]]`
```
  1 6 7
  7 2 4
  3 5 9
```
your solution should return elements in the following order

```
9
4 5
7 2 3
6 7
1
```
`should return [9, 4, 5, 7, 2, 3, 6, 7, 1]`

Your task is to write the function diagonal() that returns the array elements in the above manner.

---

# Challenge 4

### Link to Challenge: [Vasya and System of Equations](https://www.codewars.com/kata/vasya-and-system-of-equations/train/javascript)

**Vasya and System of Equations**

Vasya isn't really good at math. However, he wants to get a good mark for the class. So he made a deal with his teacher. "I wil study very hard and will be able to solve any given problem!" - Vasya said.

Finally, today is the time to show what Vasya achieved. He solved the given task immediately. Can you?

Task:
You are given a system of equations:



In JS, C# and Java the parameters of the system: 1 ≤ n, m ≤ 1000

You should count, how many there are pairs of integers (a, b) (0 ≤ a, b) which satisfy the system.

Examples
solution(9,3) // => 1
solution(14,28) // => 
solution(4,20) // => 0

# Challenge 5

### Link to Challenge: [Vowel-consonant lexicon](https://www.codewars.com/kata/vowel-consonant-lexicon/train/javascript)

**Vowel-consonant lexicon**


If we alternate the vowels and consonants in the string "have", we get the following list, arranged alphabetically: ['ahev', 'aveh', 'ehav', 'evah', 'vahe', 'veha']. These are the only possibilities in which vowels and consonants are alternated. The first element, ahev, is alphabetically lowest.

Given a string:

alternate the vowels and consonants and return the lexicographically lowest element in the list
If any two or more vowels or consonants must follow each other, return "failed"
if the number of vowels and consonants are equal, the first letter of the result must be a vowel.
Examples:

solve("codewars") = "failed". However you alternate vowels and consonants, two consonants must follow each other
solve("oruder") = "edorur"
solve("orudere") = "ederoru". This is the only option that allows you to alternate vowels & consonants.