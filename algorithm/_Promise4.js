class _Promise4 {
    static FUIFILL = "Finished"
    static PENDING = "Waiting"
    static REJECT = "Refused"
    constructor(fn) {
        this.result = null
        this.status = _Promise4.PENDING
        this.resolveArr = []
        this.rejectArr = []
        try {
            fn(this.resolve, this.reject)
        } catch (e) {
            this.reject(e.message)
        }
    }

    resolve(res) {
        if (this.status === _Promise4.PENDING) {
            this.status = _Promise4.FUIFILL
            this.result = res
            this.resolveArr.forEach((callback) => {
                callback(res)
            })
        }
    }

    reject(res) {
        if (this.status === _Promise4.PENDING) {
            this.status = _Promise4.REJECT
            this.result = res
            this.rejectArr.forEach((callback) => {
                callback(res)
            })
        }
    }

    then(success, failure) {
        success = typeof success === "function"? success: ()=> {}
        failure = typeof failure === "function"? failure: ()=> {}
        if (this.status === _Promise4.PENDING) {
            this.resolveArr.push(success)
            this.rejectArr.push(failure)
        }
        if (this.status === _Promise4.FUIFILL) {
            success(this.result)
        }
        if (this.status = _Promise4.REJECT) {
            failure(this.result)
        }
    }
}