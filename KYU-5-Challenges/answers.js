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

// Solution 1 -- works just fine, but a bit clunky
function pickPeaks(arr) {

    var obj = {}
    obj.pos = []
    obj.peaks = []

    arr.forEach((e, i) => {
        if (i > 0 && i < arr.length - 2) {
            if (e > arr[i - 1] && e > arr[i + 1]) {
                obj.pos.push(i)
                obj.peaks.push(e)
            }
            else if ((e > arr[i - 1] && e == arr[i + 1])) {
                var j = 2
                while (arr[i + 1] == arr[i + j]) {
                    j++
                }
                if (arr[i + 1] > arr[i + j]) {
                    obj.pos.push(i)
                    obj.peaks.push(e)
                }
            }
        }
    })
    return obj
}

// Solution 2 -- much cleaner
function pickPeaks(arr) {
    let res = { pos: [], peaks: [] };
    if (arr.length > 2) {
        let p = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                p = i;
            } else if (arr[i] < arr[i - 1] && p) {
                res.pos.push(p);
                res.peaks.push(arr[p]);
                p = 0;
            }
        }
    }
    return res;
}

/* ---------- CHALLENGE 3 (JOSEPHUS PERMUTATION) ---------- */

// Solution 1, using while loop
function josephus(items, k) {
    let ans = []
    let i = (k % items.length) ? (k % items.length) - 1 : items.length - 1
    while (items.length) {
        ans.push(items.splice(i, 1)[0])
        i = (--i + k) % items.length
    }
    return ans
}

// Solution 2, slightly shorter
function josephus(items, k) {
    let ans = [], i = 0
    while (items.length) {
        ans.push(items.splice(i = (i + k - 1) % items.length, 1)[0])
    }
    return ans
}

/* ---------- CHALLENGE 4 (NUMBER OF TRAILING ZEROS OF N!) ---------- */

// Solution 1
function zeros(n) {
    let [answer, i] = [0, 5]
    while (n / i) {
        answer += Math.floor(n / i)
        i *= 5
    }
    return answer
}

// Solution 2 – no "i" necessary
function zeros(n) {
    let z = 0
    while (n) {
        n = Math.floor(n / 5)
        z += n
    }
    return z
}

// Solution 3 – recursive
function zeros(n) {
    return n / 5 < 1 ? 0 : Math.floor(n / 5) + zeros(n / 5)
}

/* ---------- CHALLENGE 5 (COMPLETE THE TRIANGLE PATTERN) ---------- */

// Solution 1
function makeTriangle(m, n) {
    let valid = false
    let str = ``
    let num;

    for (let i = 0; i < n; i++) {
        let x = (Math.pow(i, 2) + i) / 2
        if (x == n + 1 - m) {
            num = i
            break
        }
    }
    if (!num) return ''
    console.log("MADEIT: ", num)
    let ans = []
    for (let i = 0; i < num; i++) {
        ans.push([])
        for (let j = 0; j < num; j++) {
            let cur = (m + j) % 10
            console.log(ans, cur)
            //       ans[j].push(cur)
        }
        num--
    }
    console.log(ans)

}