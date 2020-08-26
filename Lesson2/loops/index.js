// var counter = 0;

// while (counter < 10) {
//     console.log(counter);
//     counter++;
// }

// do {
//     console.log(counter);
//     counter++;
// }
// while (counter < 10 );

//  --------------------------

// var counter = 0, num = +prompt('Enter the number');

// while (true) {
//     counter++;

//     console.log(counter);
//     // if(num % 2 == 0) {
//     //     break;
//     // } else {
//     //     continue;
//     // }
//     if(num % 2 == 0) {
//         break;

//     }
// };

// 1 - в начале один раз
// 2 - (условие) - при каждой итерации 
// 2 - в конце

for (var counter = 0; counter < 10; counter+=2) {
    console.log(counter);
}