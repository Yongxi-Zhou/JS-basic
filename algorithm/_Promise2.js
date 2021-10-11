class _Promise {
    static FULFILL = 'Finished';
    static PENDING = 'Waiting';
    static REJECT = 'Refused';

    constructor(fn) {
        this.status = _Promise.PENDING
        this.result = null
        this.resolveCallback = []
        this.rejectCallback = []
        try {
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch(e) {
            this.reject(e.message)
        }
    }

    resolve(res) {
        setTimeout(() => {
            if (this.status === _Promise.PENDING) {
                this.status = _Promise.FULFILL
                this.result = res
                this.resolveCallback.forEach(callback => {
                    callback(res)
                })
            }
        });
    }

    reject(res) {
        setTimeout(() => {
            if (this.status === _Promise.PENDING) {
                this.status = _Promise.REJECT
                this.result = res
                this.rejectCallback.forEach(callback => {
                    callback.res
                })
            }
        });
    }

    //then 中 this.status == null
    then(success, failure) {
        return new _Promise((resolve, reject) => {
            success = typeof success === 'function'? success : () => {}
            failure = typeof failure === 'function'? failure : () => {}
            if (this.status === _Promise.PENDING) {
                this.resolveCallback.push(success)
                this.rejectCallback.push(failure)
            }
        })
    }
}


// console.log('111');
// let p = new _Promise((resolve, reject) => {
//     console.log(222);
//     // setTimeout(() => {
//     //     resolve(22)
//     //     console.log('timeOut');
//     // }, 0);
//     resolve(444)
//     // console.log(33);
// }).then(res => {
//     //PENDING
    
//     console.log(res);
// })

// console.log('333');

console.log('111');
let p = new Promise((resolve, reject) => {
    console.log(222);
    setTimeout(() => {
        resolve('last')
        console.log('timeOut');
    }, 0);
    // resolve(444)
    // console.log(33);
}).then(res => {
    //PENDING
    
    console.log(res);
})

console.log('333');