// 传入的所有 Promsie 都是 fulfilled，则返回由他们的值组成的，状态为 fulfilled 的新 Promise；
// 只要有一个 Promise 是 rejected，则返回 rejected 状态的新 Promsie，且它的值是第一个 rejected 的 Promise 的值；
// 只要有一个 Promise 是 pending，则返回一个 pending 状态的新 Promise；



//传入值是一个Iterable
function PromiseAll(promises) {
    return new Promise((resolve, reject) => {
        //把Iterable转成数组
        const arr = Array.from(promises)
        const res = []
        let count = 0
        const len = arr.length
        arr.forEach((item, idx) => {
            Promise.resolve(item).then(val => {
                res[idx] = val
                count++
                if (count === len) {
                    resolve(res)
                }
            })
            .catch(e => {
                reject(e)
            })
        })
    })
}

let arr = [1, Promise.reject(2), 3]

PromiseAll(arr).then(res => {
    console.log(res);
}, err => {
    console.log(err);
})