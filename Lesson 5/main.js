// ----------------------------------------------------------
// Пример ДЗ
// function explainer (arr){
//     let newArr = arr.slice();

//     for (let index = 0; index < arr.length; index++) {
//         const element = array[index];
//         if(!element) {
//             arr.splice(i--, 1)
//         } else {
//             createObjByTypeData(element)
//         }
//     }
// }

// function createObjByTypeData(item){
//     if(typeof item == 'string') {
//         return {
//             type: t,
//             value: item,
//             length: item.length
//         }
//     } else {
//         return {
//             type: t,
//             value: item,

//         }
//     }
// }

// ----------------------------------------------------------
// Немного про объекты
// let o = {
//     type: 'string',
//     value: 'item',
//     length: 10
// };

// console.log(Object.keys(o));
// console.log(Object.values(o));
// console.log(Object.entries(o));

// let sign = prompt('+ , - , *, /');
// let result = null;

// ----------------------------------------------------------
// Пример коллбэков
// if (sign == '+') {
//     result = calculate(add, 10, 20);
// } else if (sign == '-') {
//     result = calculate(sub, 100, 30);
// }

// console.log(result);

// function calculate(operation, n1, n2) {
//     return operation(n1, n2, n3)
// }

// function add(n1, n2) {
//     return n1 + n2
// }

// function sub(n1, n2) {
//     return n1 - n2
// }

// ----------------------------------------------------------
// Методы массива
// let array = [10, null, '', 20, 4, 5, 0];

// еще for для перебора массива
// for (let item of array) {
//     console.log(item);
// }

// Пример того как работает forEach
function customForEach(array, cb) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];

        cb(item, index)
    } 
}

customForEach(array, function (item, index) {
    console.log(index + ' - ' + item);
});


// коллбэк в переменной
// let print = function (item, index) {
//     console.log(index + ' - ' + item);
// }

// array.forEach(print);

// коллбэк как аргумент

// array.forEach(function (item, index) {
//     console.log(index + ' - ' + item);
// });

// Работа с filter
// let filterAction = function(item, index){
//     return !!item;
// }

// let result = array.filter(filterAction);

// console.log(result);

// Работа с map
// let res = [];
// let str = 'libero tempora expedita accusantium sed repellat incidunt! Iure nam doloremque minus!';

// let arrStr = str.split(' ');
// console.log('arrStr', arrStr);

// let transformAction = function (item, index) {
//     return item.length;
// }

// res = arrStr.map(transformAction);
// console.log('res', res)

// Стрелочные ф-ции
// function transformAction2(item, index) {
//     return item.length;
// }

// let transformAction = function (item, index) {
//     return item.length;
// }

// transformAction3 = (item) => {
//     // .... 
//     return item.length;
// }

// transformAction4 = (item) => item.length;


// Работа с map со стрелочными функциями
// let str = 'libero tempora expedita accusantium sed repellat incidunt! Iure nam doloremque minus!';
// let arrStr = str.split(' ');

// console.log('arrStr', arrStr);


// let res = arrStr.map((item) => item.length);

// console.log('res', res)