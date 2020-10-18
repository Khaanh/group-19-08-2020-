
// создание простого объекта
let cat = {
    name: "Rob",
    age: 10,
    place: {
        park: true,
        home: false
    },
    'test name': 10,
    run: function () {
        console.log('Cat is ranning');
    }
};

console.log(cat.lastName?.info);

//  копируем по ссылке
let cat2 = cat;

// работает с cat - меняется и cat2
cat.run();
cat.place.home = true;

// cat2 изменился
console.log(cat2.place.home);
console.log(cat2['age']); // можем читать поле через строку

// может случится преоброзование 
console.log(cat2 + ''); // [Object object]
console.log(cat2 - 10); // NaN
console.log(!!cat2); // любой объект (даже пустой) -  true


// Array Introduction

let arr = [true, 10, 'str'];

arr[0] = false;
console.log('Array', arr, arr.length);
console.log('0 item',arr[0]);


arr[10] = '11n item'
console.log('Array', arr, arr.length, arr[9]);

// join
let arr2 = [1, 2, 3];
console.log(arr2.join(' => '));

let testString = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Modi quisquam ullam officia iusto libero natus. Placeat, maxime aspernatur.`;

// split

let splitArr = testString.split(' ')

for (let index = 0; index < splitArr.length; index++) {
    const element = splitArr[index];
    console.log(element);
}

let array = [false, 10, '', 20, null, 0, 10, undefined];
// Вставка
console.time('push');
array.push(100);
console.timeEnd('push');
// ------------
console.time('unshift');
array.unshift('new elem');
console.timeEnd('unshift');
// Удаление
let dE = array.pop();
console.log(dE, array);

let dE2 = array.shift();
console.log(dE2, array);

// Работа с ф-ями

let newArr = filterNegative(array);
console.log('filterNegative', newArr, array);
let deletedElementsArray = removeNegativeValues(array);
console.log('removeNegativeValues', deletedElementsArray, array);

function removeNegativeValues(array) {
    let item;
    let deletedElementsArray = [];
    let deleted;

    // БАГ С SLICE - либо перебор с конца

    // for (let i = array.length-1; i >= 0; i--) {
    //     item = array[i];

    //     if(!item) {
    //         console.log('item', item);
    //         deleted = array.splice(i, 1)[0];

    //         deletedElementsArray.push( deleted ) 
    //     }
    // }
    for (let i = 0; i < array.length; i++) {
        item = array[i];

        if (!item) {
            console.log('item', item);
            // БАГ С SLICE - либо пишем i--, чтобы вернуться на позицию назад (из-за уменьшенее длины при удалении)
            deleted = array.splice(i--, 1)[0];

            deletedElementsArray.push(deleted)
        }
    }
    return deletedElementsArray;
}

function filterNegative(array) {
    let item, arr = [];

    for (let i = 0; i < array.length; i++) {
        item = array[i];
        if (!item) {
            arr.push(item)
        }
    }
    return arr;
}