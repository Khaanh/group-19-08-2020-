var a = 10;
var b = 20;
a += b;

var result = a + b;
var res2 = a <= b;

var res3 = 11 % 3;
console.log(res2);
///
// ператор равенства "==" предназначен для сравнения значений двух переменных, 
//         при этом необходимо помнить о следующих правилах:
        
//              1. если одно значение null а другое undefined - значения равны.
//              2. если одно значение число, а второе строка, то строка преобразоваться в число и производиться сравнение.
//              3. если одно значение true оно преобразуется в 1, если значение false оно преобразоваться в 0.

var a = 1,                  // простое число
b = "1",                // число как строка
c = "some",             // строка            
d = 'som',              // строка
e = true,               // логическое "истина"
res;

res = a == b;
console.log("a равно b : " + res);

res = c == d;
console.log("c равно d : " + res);

res = a == e;
console.log("a равно e : " + res);


    // Идентичность - требует совпадения типа и значения переменной, 
    // когда для равенства достаточно только совпадающих значений.

    // Оператор идентичности "===" предназначен для проверки значений двух переменных на идентичность, 
    // при этом необходимо помнить о следующих правилах:
        
    //     1. если значения имеют разные типы они не идентичны.
    //     2. если значения являются числами имеют одинаковые значения и не являются значения NaN - они идентичны.
    //     3. если две строки имеют одинаковую длину и содержат одни и те же символы - они идентичны.
    //     4. два одинаковых логических значения идентичны.
    var a = 1;                  // простое число
    var b = "1";                // число как строка
    var c = "some";             // строка            
    var d = 'some';             // строка
    var e = true;               // логическое "истина"
    var f = 1;
    var g = true;
    var res;

    res = a == b;
    console.log("a равно b : " + res);
    res = a === b;
    console.log("a идентично b :" + res);


    res = a == f;
    console.log("a равно f :" + res);
    res = a === f;
    console.log("a идентично f :" + res);


    res = c == d;
    console.log("c равно d :" + res);
    res = c === d;
    console.log("c идентично d :" + res);


    res = f == g;
    console.log("f равно g :" + res);
    res = f === g;
    console.log("f идентично g :" + res);

    res = null == undefined;
    console.log("null равно undefined :" + res);
    res = null === undefined;
    console.log("null идентично undefined :" + res);

    res = NaN == NaN;
    console.log("NaN равно NaN :" + res);
    res = NaN === NaN;
    console.log("NaN идентично NaN :" + res);
    
    res = Infinity == Infinity;
    console.log("Infinity равно Infinity :" + res);
    res = Infinity === Infinity;
    console.log("Infinity идентично Infinity :" + res);