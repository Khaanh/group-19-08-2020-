// let info = {
//     neme: "Michael",
//     surname: "Scofield",
//     specializatin: "Architect"
// };

// let {
//     neme: name,
//     surname,
//     specializatin: specialization
// } = info;

// let newO = {
//     name,
//     surname,
//     specialization
// }
// // ----------------------

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63,
//         science: 85
//     }
// };

// function showInfo(student) {
//     console.log('Hello, ' + student.name);
//     console.log('Your Maths score is ' + (student.scores.maths || 0));
//     console.log('Your English score is ' + (student.scores.english || 0));
//     console.log('Your Science score is ' + (student.scores.science || 0));
// }

// function showInfo({
//     name,
//     scores: {
//         maths = 0,
//         english = 0,
//         science = 0
//     }
// }) {
//     console.log('Hello, ' + name);
//     console.log('Your Maths score is ' + maths);
//     console.log('Your English score is ' + english);
//     console.log('Your Science score is ' + science);
// }
// showInfo(student);

// //  ---------------------

// const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let [red, orange, ...other] = rainbow;
// let rainbowRefresh  = [...other, red, orange];
// console.log(rainbowRefresh);

//  ----------------DOM
// let test = document.getElementById('test');
// let test = document.querySelector('#test');
// let divs = document.querySelectorAll('div');
// let [...arr] = divs;
// console.log(test, divs, arr);

// let nodes = document.body.childNodes;
// nodes.forEach( node => {
//     console.log(node.nextSibling.nextSibling);
// })
// console.dir(document.body)

// let children = document.body.children;
// console.log(children);

// Array.prototype.forEach.call(children, (element) => {
//     console.log(element.nextElementSibling);
// })