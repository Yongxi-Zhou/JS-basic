//节流  触发高频事件， 只会在 N 秒内执行一次
function throttle(fn, wait) {
    let timer;
    return function() {
        if (timer) {
            return
            // 防止在有timer的情况下新建timer
        }
        let context = this
        let args = arguments
        timer = setTimeout(() => {
            fn.apply(context, args)
            timer = null
        }, wait);
    }
}

function getAction(e) {
    console.log(e.pageX, e.pageY);
}
document.querySelector('.node').addEventListener('mousemove', throttle(getAction, 200))