// function create(fn) {
//     const obj = {}
//     let args = arguments
//     //怎么把属性装进去
//     obj.__proto__ = fn.prototype
//     return obj
// }

function Father(name, age) {
    this.name = name
    this.age = age
    
}
//函数写在构造函数外部
Father.prototype.say = function() {
    console.log(`i am ${this.name}`);
}


let f1 = new Father("jack", 70)
console.log(f1.age);
f1.say()


//参数：第一个是构造函数，之后的都是传值
function _new() {
    let obj = new Object()
    //把第一个参数shift出来，这时argument剩下的都是构造函数的参数
    let constructor = [].shift.call(arguments)

    //让新对象的的隐式原型指向构造函数的原型
    obj.__proto__ = constructor.prototype

    //执行构造函数，this指向新对象，参数是传入的参数!!!!
    let ret = constructor.apply(obj, arguments)

    //要看ret是不是对象，如果是对象就要返回对象

    //最后要返回实例对象
    return typeof ret === "object"? ret: obj
}

let f2 = _new(Father, "kate", 17)
console.log(f2.age);
f2.say()