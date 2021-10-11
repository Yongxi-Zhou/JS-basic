/**
 * 2.构造函数继承
 */

 function Parent(name) {
    this.name = name || 'baba'
    this.arr = [1]
}

function Child(name, like) {
    //重点
    Parent.call(this, name)
    this.like = like
}

let boy1 = new Child('jack', 'hehe')
let boy2 = new Child('john', 'hah')

//优点1: 可以给子类传参数
console.log(`boy1的name = ${boy1.name}`);
console.log(`boy2的name = ${boy2.name}`);
console.log(boy1.say === boy2.say);

//优点2:不会共享了父类构造函数的引用属性
boy1.arr.push(2)
console.log(`boy1的arr = ${boy1.arr}`);
console.log(`boy2的arr = ${boy2.arr}`);

//缺点1: 不能共享父类原型上的方法
Parent.prototype.walk = function() {
    console.log("walking!!");
}

console.log(boy1.walk); //undefined