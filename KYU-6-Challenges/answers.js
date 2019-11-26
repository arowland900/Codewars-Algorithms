/* ---------- CHALLENGE 1 (TV CHANNELS) ---------- */

// Solution 1 -- this solution works well, but we can also solve this problem more concisely
function redarr(arr) {
    let res = {}
    arr = [...new Set(arr)].sort()
    for (let i in arr) res[i] = arr[i]
    return res
}

// Solution 2 -- this seems like the most concise way to go about writing this algorithm
function redarr(arr) {
    return Object.assign({}, [...new Set(arr)].sort())
}

// Solution 3 -- this solution does not use "Set" or "Object.assign()", to show that we can solve this problem without any JS shortcuts
function redarr(arr) {
    let newArr = [], res = {}
    for (let i in arr) newArr.includes(arr[i]) ? [] : newArr.push(arr[i])
    newArr.sort()
    for (let i in newArr) res[i] = newArr[i]
    return res
}

/* ---------- CHALLENGE 2 (VASYA CLERK) ---------- */

// Solution 1 -- works fine, but thinking of ways to write it more concisely
function tickets(peopleInLine) {
    let change = []
    if (peopleInLine[0] !== 25) return "NO"
    while (peopleInLine.length) {
        let x = peopleInLine.shift()
        if (x == 25) {
            change.unshift(25)
        } else if (x == 50) {
            if (change[0] == 25) {
                change.shift()
                change.push(50)
            } else return "NO"
        } else {
            if (change[0] == 25) {
                if (change.includes(50)) {
                    change.shift()
                    change.pop()
                } else if (change[1] == 25 && change[2] == 25) {
                    change.splice(0, 3)
                } else return "NO"
            } else return "NO"
        }
    }
    return "YES"
}

// Solution 2 -- slightly more concise, but similar time complexity
function tickets(pplInLine) {
    if (pplInLine[0] != 25) return "NO"
    let change = []
    while (pplInLine.length) {
        let x = pplInLine.shift()
        if (x == 25) change.unshift(25);
        else if (x == 50) {
            if (change.includes(25)) { change.shift(); change.push(50); }
            else return "NO"
        }
        else {
            if (change.includes(50) && change.includes(25)) { change.shift(); change.pop(); }
            else if (change.filter(e => e == 25).length > 2) change.splice(0, 3);
            else return "NO"
        }
    }
    return "YES"
}

// Solution 3 -- more concise, alternative data storate
function tickets(ppl) {
    let bank = {
        '25': 0,
        '50': 0
    }
    while (ppl.length) {
        let c = ppl.shift()
        let x = (c - 25) / 25
        bank[c] += 1
        if (x > 2 && bank['50']) {
            bank['50'] -= 1;
            x -= 2;
        }
        bank['25'] -= x
        if (bank['50'] < 0 || bank['25'] < 0) return 'NO';
    }
    return "YES"
}

// Solution 4 -- very concise, love this one (got this from codewars)
function tickets(peopleInLine) {
    let [c25, c50] = [0, 0];
    for (let v of peopleInLine) {
        if (v === 25) c25++;
        if (v === 50) { c50++; c25--; }
        if (v === 100) { c25--; c50 > 0 ? c50-- : c25 -= 2; }
        if (c25 < 0 || c50 < 0) return 'NO'
    }
    return 'YES'
}

/* ---------- CHALLENGE 3 (TRAVERSE ARRAY ELEMENTS DIAGONALLY) ---------- */

// Solution 1 -- using nested for loops with a tmp variable
function diagonal(arr) {
    let ans = []
    let num = arr.length - 1

    for (var i = num; i >= 0; i--) {
        var tmp = i
        for (var j = num; j >= i; j--) {
            ans.push(arr[tmp][j])
            tmp++
        }
    }
    for (var i = num - 1; i >= 0; i--) {
        var tmp = i
        for (var j = 0; j <= i; j++) {
            ans.push(arr[j][tmp])
            tmp--
        }
    }
    return ans
}

// Solution 2 -- similar approach, slightly more concise code
function diagonal(arr) {
    let n = arr.length - 1, res = []
    while (arr[0].length) {
        arr.forEach((a, i) => {
            if (i >= n && a.length) {
                res.push(a.pop())
            }
        })
        n--
    }
    return res
}

/* ---------- CHALLENGE 4 (VASYA AND SYSTEM OF EQUATIONS) ---------- */

// Solution 1 -- using nested for loops

function solution(n, m) {
    let c = 0
    for (let a = 0; a <= Math.sqrt(n); a++) {
        for (let b = 0; b <= Math.sqrt(m); b++) {
            if (a * a + b == n && b * b + a == m) c += 1
        }
    }
    return c
}

// Solution 2 -- using one loop

function solution(n, m) {
    let c = 0
    for (let a = 0; a * a <= n; a++) {
        let b = n - a * a
        if (b * b + a == m) {
            c++
        }
    }
    return c
}

/* ---------- CHALLENGE 5 (VOWEL CONSONANT LEXICON) ---------- */

// Solution 1
function solve(s) {

    let vowels = 'aeiou'
    let [v, c] = [[], []]
    let res = ''

    s.split('').sort().forEach(l => {
        vowels.includes(l) ? v.push(l) : c.push(l)
    })

    if (v.length - 1 > c.length || c.length - 1 > v.length) {
        return "failed"
    }

    while (v.length || c.length) {
        let x = c.shift()
        let y = v.shift()
        if (c.length > v.length) {
            if (x) res += x
            if (y) res += y
        } else {
            if (y) res += y
            if (x) res += x
        }
    }
    return res
}

// Solution 2 -- cleaner, uses regex, takes less time

function solve(s) {

    let a = s.match(/[^aeiou]/g).sort();
    let b = s.match(/[aeiou]/g).sort();

    if (a.length > b.length)
        [a, b] = [b, a];

    if (b.length - a.length > 1)
        return 'failed';

    return b
        .map((c, i) => c + (a[i] || ''))
        .join('');
};