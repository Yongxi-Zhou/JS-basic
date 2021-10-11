let arr = [11,22,33]



Array.prototype._forEach = function(fn) {
    let arr = this
    for (let i = 0; i < this.length; i++) {
        item = this[i]
        idx = i
        fn(item, idx, arr)
    }
}

arr._forEach((item, idx, nums) => {
    console.log(item, idx, nums);
})