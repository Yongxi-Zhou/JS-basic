function Parent(name) {
    this.name = name || 'baba'
    this.arr = [1]
}

Parent.prototype.say = function() {
    console.log("hello!");
}

function Child(like) {
    this.like = like
}

// 1.原型继承
Child.prototype = new Parent()
Child.prototype.constructor = Child

let boy1 = new Child('jack')
let boy2 = new Child('john')

//缺点1: 不能给子类传参数
console.log(`boy1的name = ${boy1.name}`);
console.log(`boy2的name = ${boy2.name}`);
console.log(boy1.say === boy2.say);

//缺点2:共享了父类构造函数的引用属性
boy1.arr.push(2)
console.log(`boy1的arr = ${boy1.arr}`);
console.log(`boy2的arr = ${boy2.arr}`);