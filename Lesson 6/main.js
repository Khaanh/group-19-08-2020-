// --------------ДЗ 8---------------

// function customFilter(array, cb) {
//     let newArr = []
//     for (let index = 0; index < array.length; index++) {
//         const item = array[index];
//         if(cb(item, index)){
//             newArr.push(item)
//         }
//     } 
//     return newArr;
// }

// customFilter(array, function (item, index) {
//    return item > 5;
// });

// --------------ДЗ 9---------------
// let vasia = { name: "Вася", age: 25 };
// let petia = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let egor = { name: "Егор", age: 40 };
// let dima = { name: "Дима", age: 35 };
// let lena = { name: "Лена", age: 18 };

// let users = [ vasia, petia, masha, egor, dima, lena ];

// users.filter((item) => item >= 30 ).map((item) => item?.name);


// -------------- Лексическое окружение ---------------

// let name = 'John';

// function say(){
//     console.log(name);
// }

// name = 'Frank';

// say();

// -------------- Ф-ция внутри ф-ции ---------------

// let fName;
// function printInfo(fName, lName) {

//     function getFullName() {
//         return `${fName} ${lName}`;
//     }

//     return getFullName();
// }

// console.log(printInfo('John', 'Doe'));

// -------------- Пример замыкания ---------------

// function makeCounter() {
//     let count = 0;

//     return function () {
//         return count++;
//     }
// }

// let counter1 = makeCounter()();
// let counter2 = makeCounter();

// console.log('counter1' ,counter1());
// console.log('counter1' ,counter1());

// console.log('counter2', counter2());
// console.log('counter2', counter2());

// -------------- Блоки тоже имеют свой контекст ---------------

// if (true) {
//     let name = 'Name';

//     function print(mess) {

//     }
// }

// -------------- Циклы создают ЛО для каждой итерации ---------------

// let c = 0;

// while (c < 10) {
//     console.log(c);
//     c++;
// }

// -------------- Эмуляция ЛО ---------------

// {
//     let message = "Hello";
//     alert(message); // Hello
// }

// -------------- Еще про замыкание ---------------

// function sum(a) {
//     // return (b) => a + b;
//     return function (b) {
//         return a + b;
//     }
// }

// console.log(sum(1)(2));
// console.log(sum(5)(-1));

// -------------- Пример замкания, где у каждой ф-ции свои аргументы ---------------

// function convertTo(number) {

//     return function (type) {
//         return number + type;
//     }
// }

// let res = convertTo(15)('cm');
// console.log(res);

// -------------- Задания из learn.javascript ---------------

// function inBetween(a, b) {
//     return function(item) {
//         return a <= item && item <= b;
//     }
// }

// function inArray(arr) {
//     return function(item) {
//         return arr.includes(item)
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

// console.log( arr.filter(inArray([5, 2, 10])) ); // 1,2