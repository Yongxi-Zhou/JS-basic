let p1 = Promise.resolve("p1 finished")
let p2 = Promise.reject("p2 reject")
let p3 = Promise.resolve("p3 finished")

let arr = [p1, p2, p3]

Promise.all(arr).then(res => {
    console.log(res);
})

//传入用数组包装的promise对象， 如果全部都resolve，就返回   由每个promise里的参数 组成的数组
//如果有reject的，就返回第一个reject对象里的参数

Promise.all = function(arr) {
    let idx = 0
    let res = []
    return new Promise((resolve, reject) => {
        arr.forEach((p, i) => {
            Promise.resolve(p)
            .then(
                (val) => {
                    idx++
                    res[i] = val
                    if (idx === arr.length) {
                        return res
                    }
                }
            )
            .catch(
                err => {
                    reject(err)
                }
            )
        });
    })
}