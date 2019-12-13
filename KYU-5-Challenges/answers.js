/* ---------- CHALLENGE 1 (BUDDY PAIRS) ---------- */

// first solution -- works, but has poor time complexity & times out in Codewars
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

// second solution -- works, and has slightly better time complexity than first solution, but still times out in Codewars
function buddy(start, limit) {
    function getSum(e) {
        let divs = []
        for (let i = Math.ceil(e / 2); i > 0; i--) if (!(e % i)) divs.push(i)
        return divs.reduce((a, c) => { a += c; return a }, 0)
    }
    for (let i = start; i <= limit; i++) {
        let buddy = getSum(i) - 1
        let buddySum = getSum(buddy)
        if (buddySum == i + 1) return [i, buddy]
    }
    return "Nothing"
}

// best solution -- no longer times out on Codewars
const getSum = (n) => {
    let sum = 0
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) i === n / i ? sum += i : sum += n / i + i
    }
    return sum
}

function buddy(start, limit) {
    for (let i = start; i <= limit; i++) {
        let sum = getSum(i)
        if (i < sum && i === getSum(sum)) return [i, sum]
    }
    return "Nothing"
}

/* ---------- CHALLENGE 2 (PICK PEAKS) ---------- */


