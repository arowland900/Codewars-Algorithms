// Challenge 1

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