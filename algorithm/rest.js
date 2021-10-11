function rest(a, ...b) {
    console.log(a);
    console.log(b);
    console.log(...b);
}
//...b就是原始输入的多个参数， b就是数组
rest(1,[2,2,2], 3)