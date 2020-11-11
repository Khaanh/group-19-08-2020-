let john = {name: "John", age: 10};
let any = {name: "Any"};
let array = ['test', true, 'test2', 'test', any, 10, true, 10, john];

// let u = {};
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     u[element] = element;
// }

// console.table(u);
// console.table(Object.values(u));

//Set
// let s = new Set(array);
// s.add(1);
// s.add(2);
// console.log(s);
// s.add(john);
// s.add(john);
// s.add(any);
// console.log(s);
// console.log(Object.entries(array));
// for (const [key, value] of m.entries()) {
//     console.log(key, value);
// }


//Map
// let m = new Map();
// m.set(true, 10);
// m.set(john, 10);
// m.set(any, 100);
// m.set([1,2,3], 100);
// console.log(m);
// console.log(m.entries());
// console.log(m.get(john));
// console.log(m.get(any));

// for (const [key, value] of m.entries()) {
//     if(value >= 100 && !(key instanceof Array) ) {
//         console.log(key.name);
//     }
// }

//WeakMap
// let m = new WeakMap();
// m.set(true, 10);
// m.set(john, 10);
// m.set(any, 100);
// john = null;
// m.set([1,2,3], 100);
// console.log(m);
// let s =  Symbol.for('id');
// let s2 =  Symbol.for('id');
// let s2 =  Symbol('name');

// console.log(s === s2);

// let user = {
//     id: 10,
//     name: "John",
//     [s]: 100,
//     [Symbol.toPrimitive]: function(hint) {
//         console.log(hint);
//         return hint == "number" ? this.id : this.name;  
//     },
    // toString: function(hint) {
    //         return this.name;
    // },
    // valueOf: function(hint) {
    //     return this.id;
    // } 
// }

// console.log(user[s] );
// user[s] = 'new id'
// console.log(user[s]);

// console.log((+user) + "test");
// console.log(+user);
// console.log(user + "");

// Symbol.toPrimitive