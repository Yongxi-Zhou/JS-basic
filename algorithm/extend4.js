/**
 * 4.寄生组合继承-完美方式
 */

 function Parent(name) {
    this.name = name || 'baba'
    this.arr = [1]
}

//将需要共享复用的方法定义在父类的原型对象上
Parent.prototype.say = function() {
    console.log("say something");
}

function Child(name, like) {
    Parent.call(this, name)
    this.like = like
}

/**
 * 修改的核心
 */
Child.prototype = Object.create(Parent.prototype)
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

console.log(Child.prototype.constructor);
console.log(Parent.prototype.constructor);
console.log(Child.prototype.__proto__ === Parent.prototype);