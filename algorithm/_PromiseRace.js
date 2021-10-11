function _PromiseRace(promises) {
    // const arr = Array.from(promises)
    const arr = [...promises]
    return new Promise((resolve, reject) => {
        arr.forEach((item, idx) => {
            Promise.resolve(item)
            .then(
                res => {
                    resolve(res)
                },
                e => {
                    reject(e)
                }
            )
        })
    })
}

const arr = [1, Promise.resolve(2), 3]
const arr2 = [ Promise.resolve(2), 3, 1]
// const arr3 = [ Promise.reject(2), 3, 1]

_PromiseRace(arr2).then(res => {
    console.log(res);
}, err => {
    console.log(err);
})