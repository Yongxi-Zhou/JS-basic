Array.prototype._some = function(fn) {
    let arr = this
    //考虑空数组情况
    if (arr == null) {
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            return true
        }
    }
    return false
}


Array.prototype._every = function(fn) {
    let arr = this
    if (arr == null) {
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            return false
        }
    }
    return true
}


let arr1 = [12,4,3,5,34]
let arr2 = []
let res = arr1._every((item) => {
    return item > 20
})
console.log(res);
// console.log(123);