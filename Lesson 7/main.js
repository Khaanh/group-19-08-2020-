// "use strict";

// Создание методов

// let user = {
//     name: "John",
//     age: 30
//     // say: function () {
//     //   console.log(user.name)
//     // }
//     // say() {
//     //   console.log(this.name)
//     // }
// };

// let admin = {
//     name: "Bob"
// };

// Ф-цию можно скопировать

// admin.say = user.say;
// user.say();
// admin.say();

// call, apply

// function say(phrase) {
//     console.log(phrase + ', ' + this.name);
// }

// say.call(user, 'Hello');
// say.apply(user, ['Hello']);
// say.call(admin, 'Bye');

// let test = {};
// let test2 = {};

// function sum(...params) {
//   console.log(params);
//   this.total = params.reduce((acc, current) => acc + current);
// }

// let wrapperSum = function (context, ...params) {
//     return function () {
//         return this.total = params.reduce((acc, current) => acc + current);
//     }.apply(context, params);
// };

// let test = {};

// let wrapperSum = function (context, ...params) {
//     return function () {
//         return this.total = params.reduce((acc, current) => acc + current);
//     }.apply(context, params);
// };

// console.log(wrapperSum(test, 1, 2), test);

// let test2 = {};

// let wrapperSum = function (...params) {
//   console.log(params);

//   return (this.total = params.reduce((acc, current) => acc + current));
// };
// test2.sum = wrapperSum;

// let r = test2.sum(1,2,3,4,5);
// console.log(r);

// let test3 = {};
// let arr = [1, 2, 3, 5];

// let r2 = test2.sum.apply(test3, arr);

// console.log(test3);

// console.log(wrapperSum(test, 1, 2), test);
// console.log(wrapperSum(test2, 1, 2, 3, 4), test2);

// заимствование метода

// function convertToStr(...args) {
   
//     // из arguments массив
//     // let arr = [].slice.call(arguments);
//     // console.log(arguments,arr);

//     //  заимствование метода

//     let join = [].join;
//     return join.call(arguments, '.');
//     // или return args.join('.')
// }

// console.log(convertToStr(1, 2, 3, 4, 5));


// как работает join из коробки

// arr[0] + separator
//  +
//  arr[1] + separator
//  ....
//  arr.length

// определить глобальную переменную можно так

// window.name = 'Test name';

// let student = {
//     name: "John",
//     total: null,
//     arr: [10, 8, 4, 7, 9],
//     show(element) {
//         console.log(this.name + ' - ' + element);
//     },
//     avr() {
//         // борьба с потеря this
//         let cb = this.show.bind(this);
//         this.arr.forEach(cb);
//     }
// };
// student.avr();

// потеря this

// let user = {
//     name: "John",
//     age: 30,
//     say() {
//         console.log(this.name);
//     }
// };

// let cb = user.say.bind(user);

// setTimeout(user.say, 2000);

// или setTimeout(() => user.say(), 2000);

// чуть больше про spread оператор

// function max(arr) {
//     console.log(Math.max(...arr));
// }

// max([1,23,55,7])