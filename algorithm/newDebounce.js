// 防抖  触发高频事件， 在N秒后只执行一次， 如果 N 秒内事件再次触发，则会重新计时。 
//timer 为null undefined 和 clear的区别

function debounce(fn, wait) {
    let timer;
    return function() {
        //先记录调用这个函数的this和传入这个函数的参数
        let context = this
        let args = arguments
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function() {
            //在 wait 秒后执行函数，改变这个函数的this指向，让调用函数的对象执行函数
            fn.apply(context, args)
            //执行完之后让timer为null 
            timer = null
        }, wait)
    }
}

function getAction(e) {
    console.log(e.pageX, e.pageY);
}
document.querySelector('.node').addEventListener('mousemove', debounce(getAction, 200))