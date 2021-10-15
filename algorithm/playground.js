// function throttle(fn, wait) {
//     let timer

//     return function() {
//         if (timer) {
//             return
//         }
//         let context = this
//         let args = arguments
//         setTimeout(() => {
//             fn.apply(context, args)
//             timer = null
//         }, wait);
//     }
// }

// //new
// function create(constructor, arguments) {
//     let obj = {}
//     obj.__proto__ = constructor.prototype
//     let ret = constructor.apply(arguments)
//     return typeof ret === "object"? ret: obj
// }

// promise.all
// Promise.prototype._all(promises) {
//     let arr = Array.from(promises)
//     let res = []
//     let ctn = 0
//     return new Promise((resolve, reject) => {
//         arr.forEach((item, idx) => {
//             Promise.resolve(item)
//             .then(val => {
//                 res[idx] = val
//                 ctn++
//                 if (ctn === arr.length) {
//                     resolve(res)
//                 }
//             })
//             .catch(e => {
//                 reject(e)
//             })
//         })
//     })
// }

// forEach
// Array.prototype.forEach = function(fn) {
//     let arr = this
//     for (let i = 0; i < arr.length; i++ ) {
//         fn(arr[i], i, arr)
//     }
// }

// bind  在Function下面
Function.prototype_bind = function(obj, ...args) {
    obj = obj || window
    let fn = this
    obj.fn = fn
    return function(...newArgs) {
        let res = obj.fn(...args, ...newArgs)
        delete obj.fn
        return res 
    }
}

Function.prototype._apply = function(obj, arg) {
    obj = obj || window
    let fn = this
    obj.fn = fn
    let res = obj.fn(...arg)
    delete obj.fn
    return res
}