// console.log("start");
// let p = new Promise((resolve, reject) => {
//     console.log(111);
//     resolve('i am first')

//     new Promise((res, rej) => {
//         console.log(11);
//         //兄弟关系的宏任务最后执行
//         setTimeout(() => {
//             console.log("timeout22");
//         }, 0);
//         //内层的resolve异步先执行，再到外层的
//         res("i am second")
//         console.log(22);
//     }).then(res => {
//         console.log(res);
//     })

//     setTimeout(() => {
//         console.log("timeout11");
//     }, 0);
//     //resolve是异步操作
//     console.log(222);

//     new Promise((res, rej) => {
//         console.log(33);
//         res("i am third")
//         console.log(44);
//     }).then(res => {
//         console.log(res);
//     })

//     console.log(333);
// })

// console.log("end");

// p.then(res => {
//     console.log(res);
// })

console.log('111');
let p = new Promise((resolve, reject) => {
    console.log(222);
    setTimeout(() => {
        resolve('last')
        console.log('timeOut');
    }, 0);
    // resolve(444)
    // console.log(33);
}).then(res => {
    //PENDING
    
    console.log(res);
})

console.log('333');