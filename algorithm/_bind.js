Function.prototype._bind = function(newObj, ...args) {
    //不能这样判断，因为newObj有可能为null，null是Object！！！！
    // newObj = newObj instanceof Object? newObj: window
    newObj = newObj || window
    let fn = this
    newObj.fn = fn
    return function(...newArgs) {
        let res = newObj.fn(...args, ...newArgs)
        delete newObj.fn
        return res
    }
}

//test bind
let obj = {
    name: "jack",
    getName: function(a, b) {
        console.log(this.name);
        console.log(a, b);
    }
}

let newObj = {
    name: "Ben"
}
// let fn = obj.getName.bind(newObj)
// fn( "age", 10)

Function.prototype._call = function(newObj, ...args) {
    newObj = newObj || window
    let fn = this
    newObj.fn = fn
    let res = newObj.fn(...args)
    delete newObj.fn
    return res
}

// obj.getName._call(newObj, "age", 10)

//注意： apply的参数只有两个，第二个是数组，不能用...args
Function.prototype._apply = function(newObj, args) {
    newObj = newObj || window
    let fn  = this
    newObj.fn = fn
    let res = newObj.fn(...args)
    delete newObj.fn
    return res
}

obj.getName._apply(newObj, ["age", 10])