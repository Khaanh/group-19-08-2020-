// http://latentflip.com/loupe

// Цепочка промисов (прошлый пример, fetch)
// Промис АПИ
// Async/await
// try catch

// let p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(1)
//     }, 2000)
// });

// p.then((value) => {
//         console.log(value);
//         return value * 2;
//     })
//     .then((value) => {
//         console.log(value);
//         return new Promise(function (resolve, reject) {
//             setTimeout(() => {
//                 resolve(value * 4)
//             }, 4000)
//         });
//     })
//     .then((value) => {
//         console.log(value);
//     })

// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let script = document.createElement('script');
//             script.src = src;
//             script.onload = () => {
//                 resolve(script);
//             }
//             script.onerror = (e) => {
//                 reject(new Error('error'));
//             }
//             document.head.append(script);
//         },1000)
//     })
// }

// loadScript('./scripts/one.js')
//         .then((data) => loadScript('./scripts/two.js'))
//         .then((data) => loadScript('./scripts/three.js'))
//         .then(()=> {
//             one();
//             two();
//             three();
//         })
// Promise.all([
//     new Promise((resolve, reject)=>setTimeout(() => {resolve(1)}, 1000)),
//     new Promise((resolve, reject)=>setTimeout(() => {reject('error')}, 1000)),
//     new Promise((resolve, reject)=>setTimeout(() => {resolve(3)}, 1000)),
// ]).then(data => {
//     console.log(data);
// }).catch( error => {
//     console.log(error);
// })

// Promise.allSettled([
//     new Promise((resolve, reject)=>setTimeout(() => {resolve(1)}, 1000)),
//     new Promise((resolve, reject)=>setTimeout(() => {reject('error')}, 1000)),
//     new Promise((resolve, reject)=>setTimeout(() => {resolve(3)}, 1000)),
// ]).then(data => {
//     console.log(data);
// }).catch( error => {
//     console.log(error);
// })

// Promise.allSettled([
//     new Promise((resolve, reject)=>setTimeout(() => {resolve(1)}, 1000)),
//     new Promise((resolve, reject)=>setTimeout(() => {reject('error')}, 1000)),
//     new Promise((resolve, reject)=>setTimeout(() => {resolve(3)}, 1000)),
// ])
// .then(data => {
//     console.log(data);
// }).catch( error => {
//     console.log(error);
// })

// Promise.resolve(1).then(data => {
//     console.log(data);
// })

// async function asyncC(value) {
//     try {
//         // if(value < 10) {
//         //     return new Error('Value < 10')
//         // }
//        let res =  await fetch('some/test');
//                   await res.json()
//     } catch(err) {
//         alert(err);
//     } 
// }

// asyncC().then(data=> {
//     console.log('Asynsc func ' + data);
// })

// let promiseAll = Promise.allSettled([
//     new Promise((resolve, reject)=>setTimeout(() => {resolve(1)}, 1000)),
//     new Promise((resolve, reject)=>setTimeout(() => {reject('error')}, 1000)),
//     new Promise((resolve, reject)=>setTimeout(() => {resolve(3)}, 1000)),
// ])

// async function getResult() {
//     let result = await asyncC(2);
//     console.log(result);
    // let promiseAllResult = await promiseAll;
    // console.log("promiseAll result", promiseAllResult);
// }
// getResult()

// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let script = document.createElement('script');
//             script.src = src;
//             script.onload = () => {
//                 resolve(script);
//             }
//             script.onerror = (e) => {
//                 reject(new Error('error'));
//             }
//             document.head.append(script);
//         },1000)
//     })
// }

// async function getScripts() {
//     let oneScript = await loadScript('./scripts/one.js');
//     let twoScript = await loadScript('./scripts/two.js');
//     let threeScript = await loadScript('./scripts/three.js');
//     one();
//     two();
//     three();
// }
// getScripts()
// loadScript('./scripts/one.js')
//         .then((data) => loadScript('./scripts/two.js'))
//         .then((data) => loadScript('./scripts/three.js'))
//         .then(()=> {
//             one();
//             two();
//             three();
//         })