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

    for (let i in peopleInLine) {
        if (peopleInLine[i] == 25) change.push(peopleInLine[i])
        else {
            let idx = change.indexOf(peopleInLine[i] - 25)
            if (idx > -1) {
                change.splice(idx, 1)
                change.push(peopleInLine[i])
            } else return "NO"
        }
    }
    return "YES"
}