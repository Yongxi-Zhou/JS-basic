function debounce(fn, delay) {
    let timer = null
    return function() {
        arg = arguments
        console.log(arg);
    }
}

function add (a, b) {
    return a + b
}

let de = debounce(add, 2)
console.log(de("i am argument"));