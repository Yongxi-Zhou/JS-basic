class Reader{
    constructor(arr) {
        this.arr = Array.from(arr)
        this.count = 0
    }

    read(idx = 1) {
        let res = this.arr.slice(this.count, this.count + idx)
        this.count += idx
        return res
    }
}

Array.prototype.getReader = function() {
    let arr = this
    return new Reader(arr)
}



