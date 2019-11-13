// Challenge 1

function redarr(arr) {
    let res = {}
    arr = [...new Set(arr)].sort()
    for (let i in arr) res[i] = arr[i]
    return res
}