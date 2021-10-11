//this的指向是执行的时候决定的，不是定义的时候
//要考虑异常情况：如果执行函数throw new Error，会变为reject状态都promise
// 异常2: 如果then里面的参数不是函数时，就传入一个空函数
//promise.then()  resolve() 是一异步执行

//1. 先写状态
class _Promise {
    //状态是静态属性
    static FULFILL = "Finished";
    static REJECT = "Rejected";
    static PENDING = "Waiting";

    constructor(fn) {
        this.status = _Promise.PENDING;
        this.result = null
        this.resolveCallback = []
        this.rejectCallback = []
        try {
            //异常1 如果执行函数throw new Error，会变为reject状态都promise
            
            // 函数的执行必须放在最后，否则会被this.status和this.result覆盖原来都结果
            //resolve和reject执行的时候this不是这个实例对象，要绑定resolve和reject的this
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch(err) {
            this.reject(err.message)
        }
    }

    /**
     * 要考虑resolve是不是被异步函数包着，也就是说resolve是在外层还是里层的异步中，
     * 如果在里面异步中，**到then执行的时候status还是PENDING状态**，就无法执行then里success()
     * 所以当status还是PENDING时，要把resolve里的参数存起来先，之后status变为FULFILL再调用
     */
    resolve(data) {
        setTimeout(() => {
            if (this.status === _Promise.PENDING) {
                this.status = _Promise.FULFILL;
                this.result = data
                this.resolveCallback.forEach(callback => {
                    //callback要传参数
                    callback(data)
                })
            }
        })
    }

    reject(message) {
        setTimeout(() => {
            if (this.status === _Promise.PENDING) {
                this.status = _Promise.REJECT;
                this.result = message
                this.rejectCallback.forEach(callback => {
                    callback(message)
                })
            }
        });
    }
    
    then(success, fail) {
        return new _Promise((resolve, reject) => {
            //异常2 考虑success或fail不是函数
            success = typeof success === 'function' ? success : () => {}
            fail = typeof fail === 'function' ? fail : () => {}
            if (this.status === _Promise.PENDING) {
                this.resolveCallback.push(success)
                this.rejectCallback.push(fail)
            }
            if (this.status === _Promise.FULFILL) {
                // then的参数怎么跟resolve的链接上 --通过类属性传递
                //如果在外层，也异步执行
                setTimeout(() => {
                    success(this.result)
                });
            }
            if (this.status === _Promise.REJECT) {
                setTimeout(() => {
                    fail(this.result)
                });
            }
        })
    }
}


// test
let p = new _Promise((resolve, reject) => {
    console.log(11);
    setTimeout(() => {
        //resolve函数只是改变状态和传递参数，最后还是让then去执行
        //如果外层异步，让PENDING状态都resolve函数先存到callback数组中，然后在调用resolve的时候在执行
        resolve('done!!')
        console.log('settimeout');
    });
    console.log(22);
})
console.log(33);

p.then(res => {
    // console.log(p.status);
    console.log(res);
    
}, err => {
    console.log(err);
}).then(res => {
    console.log(res);
})

