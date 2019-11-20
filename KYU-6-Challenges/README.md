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