class Father {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name
    }
}

class Son extends Father{
    constructor(name, like) {
        super(name);
        this.like = like
    }
    getLike() {
        return this.like
    }
}

let xiaomin = new Son("min")
let baba = new Father("fafa")

console.log(xiaomin.getName());
console.log(baba.getName());