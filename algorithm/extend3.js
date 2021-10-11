/**
 * 3.组合继承
 */

 function Parent(name) {
    this.name = name || 'baba'
    this.arr = [1]
}

function Child(name, like) {
    Parent.call(this, name)
    this.like = like
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

/**
 * test
 */
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

//优点3: 共享父类原型上的方法
Parent.prototype.walk = function() {
    console.log("walking!!");
}

boy1.walk()
//缺点：调用了两次父类构造函数，会有一份多余的父实例对象