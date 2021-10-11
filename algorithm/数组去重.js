let arr = [5,4,3,4,3,7,4,1,7]

// 1.set
function s1(nums) {
    return [...new Set(nums)]
}
console.log(s1(arr));

// 2.hashtable
function s2(nums) {
    let res = []
    nums.forEach(element => {
        if (res.indexOf(element) === -1) {
            res.push(element)
        }
    })
    return res
}
console.log(s2(arr));

// 3.filter 如果当前元素第一次出现的index跟现在的index不一样，说明重复了，用filter return过滤的条件
function s3(nums) {
    let res = []
    res = nums.filter((item, idx) => {
        return nums.indexOf(item) === idx
    })
    return res
}
console.log(s3(arr));