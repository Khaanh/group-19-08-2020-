
// пример своего конструктора
// function constructorForUser(name, age) {
//   return {
//     name,
//     age,
//     work() {
//       console.log( this.name + ' working...');
//     }
//   }
// }

// используем конструктор из коробки
// function User(name, age) {
//   // User.proto = {...}
//   // this = {}
//   // this.__proto__ = proto
//   this.name = name;
//   this.age = age;
//   //return this
// }

// запись методов в прототип
// User.prototype.work = function () {
//   console.log(this.name + " working...");
// };

// let admin = new User("John", 20);
// let user = new admin.constructor("David", 40);

// console.log(admin, user);

// let admin = constructorForUser('John', 20);
// let user = constructorForUser('David', 40);
// console.log(admin, user);

// как работают прототипы
// let animal = {
//   eat: 'meat',
//   eats() {
//     console.log('animal eats ' + this.eat);
//   }
// }

// let rabbit = {
//   // eat: 'gress',
//   jump() {
//     console.log('rabbit jump');
//   }
// }

// rabbit.__proto__ = animal;
// rabbit.eats();

// полный пример использования конструктора
// function Box( height, width, material){
//     this.height = height;
//     this.width = width;
//     this.material = material;
//   }
  
//   Box.prototype.expand = function (){
//     console.log("expanded");
//   }
  
//   Box.prototype.changeBoxAsSquare = function (size){
//     this.height = this.width = size;
//   }
  
//   let box = new Box(100, 200, 'paper');
//   box.expand();
//   box.changeBoxAsSquare(300);
//   console.log(box);