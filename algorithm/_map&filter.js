Array.prototype._map = function(fn) {
    let res = []
    let arr = this
    for (let i = 0; i < arr.length; i++) {
        res[i] = fn(arr[i], i, arr)
    }
    return res
}

let arr = [2,5,3]

let res = arr._map((item) => {
    return  item * 2
})
console.log(res);



Array.prototype._filter = function(fn) {
    let arr = this
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    //最后要return
    return res
}

let arr2 = [44,3,5,66,20,33]
let res2 = arr2._filter((item) => {
    return item > 10
})
console.log(res2);