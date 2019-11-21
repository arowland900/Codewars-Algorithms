// CHALLENGE 1 (TV CHANNELS)

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

// CHALLENGE 2 (VASYA CLERK)

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