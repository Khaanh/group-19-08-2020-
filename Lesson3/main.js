
/**
 * Функция суммирует два числа 
 * 
 * @param {number} n1 первое число (число)
 * @param {number} n2 второе число (число)
 * @returns {number} сумма чисел
 */
let message = 'Hello';

function calc( n1, n2) {
    console.log( n1, n2, message);

    if(!n1) n1 = 0;
    if(!n2) n2 = 0;

    return n1 + n2;
}

console.log(calc());