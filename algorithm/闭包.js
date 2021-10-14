function out() {
    let i = 0
    return function() {
        var i = 1
        console.log(i);
    }
}
console.log(i);