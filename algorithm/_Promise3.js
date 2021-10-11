class _Promise3 {
    static FUIFILL = "Finished"
    static PENDING = "Waiting"
    static REJECT = "Refused"
    constructor(fn) {
        this.status = _Promise3.PENDING;
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
            if (this.status === _Promise3.PENDING) {
                this.status = _Promise3.FUIFILL
                this.result = res
                this.resolveCallback.forEach(callback => [
                    callback(res)
                ])
            }   
        });
    }

    reject(res) {
        setTimeout(() => {
            if (this.status === _Promise3.PENDING) {
                this.status = _Promise3.REJECT
                this.result = res
                this.rejectCallback.forEach(callback => {
                    callback(res)
                })
            }
        });
    }

    then(success, failure) {
        return new _Promise3((resolve, reject) => {
            success = typeof success == "function"? success : () => {}
            failure = typeof failure == "function"? failure : () => {}
            if (this.status === _Promise3.PENDING) {
                this.resolveCallback.push(success)
                this.rejectCallback.push(failure)
            }
            if (this.status === _Promise3.FUIFILL) {
                setTimeout(() => {
                    success(this.result)   
                });
            }
            if (this.status === _Promise3.REJECT) {
                setTimeout(() => {
                    failure(this.result)   
                });
            }
        })
    }
}

console.log('start');
let p = new _Promise3((resolve, reject) => {
    console.log(111);
    setTimeout(() => {
        resolve("finish")
        console.log(222);
    });
    console.log(333);
}).then(res => {
    console.log(res);
}).then(console.log(123))
console.log('end');