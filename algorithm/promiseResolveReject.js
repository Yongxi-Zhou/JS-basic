let p1 = new Promise((resolve, reject) => {
    resolve("fulfill状态")
})

// p1.then(res => {console.log(res);})

let p2 = Promise.resolve(Promise.reject("err"))
p2.then(res => {console.log(res);}, err => {console.log(err);})
Promise.reject("err").catch(err => {console.log(err);})

// console.log(p1);
// console.log(p2);

// let p3 = new Promise((resolve, reject) => {
//     reject(new Error("报错了"))
// })

// let p4 = Promise.reject(new Error("BOOM"))

// console.log(p3);
// console.log(p4);

//返回带值的 状态的resolve的Promise对象
Promise.resolve = function(val) {
    //如果val是promise对象，就直接返回val
    if (val instanceof Promise) {
        return val
    }
    return new Promise((resolve) => {
        resolve(val)
    })
}


Promise.reject = function(val) {
    return new Promise((resolve, reject) => {
        reject(val)
    })
}