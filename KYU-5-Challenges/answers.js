// Challenge 1

// first solution -- works, but has poor time complexity
function buddy(start, limit) {
    let nums = []
    function getSum(e) {
        let divs = []
        for (let i = Math.ceil(e / 2); i > 0; i--) if (!(e % i)) divs.push(i)
        return divs.length ? divs.reduce((a, c) => { a += c; return a }) : 1
    }
    for (let i = start; i <= limit; i++) nums.push(i)
    let sumOfDivs = nums.map((e, j) => getSum(e))
    let numAndSum = {}
    nums.forEach((e, i) => numAndSum[e] = sumOfDivs[i])
    for (let key in numAndSum) {
        let buddy = getSum(key) - 1
        let buddySum = getSum(buddy)
        if (buddySum - 1 == key) {
            return [Number(key), buddy]
        }
    }
    return "Nothing"
}