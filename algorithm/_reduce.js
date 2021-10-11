Array.prototype._reduce = function(fn, initVal) {
    //要考虑数组为空，或者传入的回调函数不是函数
    if (this == null) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof fn !== "function") {
        throw new TypeError(fn + ' is not a function')
    }

    let arr = this
    let acc = arguments.length === 1? arr[0] : initVal
    let initIdx = arguments.length === 1? 1 : 0
    for (let i = initIdx; i < arr.length; i++) {
        acc = fn(acc, arr[i], i, arr)
    }
    return acc
}


let arr = [1,2,3,4,5]
let res = arr._reduce((acc, cur) => {
    return acc + cur
}, 10)
console.log(res);