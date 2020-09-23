class User {
    // password = 'default pass';
    // name = '';
    // age = null;
    #password;
    constructor(config) {
        this.name = config.name;
        this.age = config.age;
    }

    get password() {
        return this.#password;
    }

    set password(value) {
        if(value.length <= 1) {
            throw('Длинна не может быть такой маленькой')
        } else {
            this.#password = value;
        }
    }

    ['say' + 'Hi']() {
        console.log('say hi');
    }

    static createNewUser = function () {
        console.log('createNewUser - ', this.name);
        return new User({
            name: '',
            age: ''
        });
    }

    work() {
        console.log('working');
    }
}

class Admin extends User {
    constructor({name, age, role}) {
        super({name, age});
        this.role = role;
    }

    checkUserInfo() {
        console.log('info checked');
    }

    // override
    work() {
        console.log('admin is working');
    }
}

class Manager extends User {
    constructor({role, edit, name, age}) {
        super({name, age});
        this.role = role;
        this.edit = edit;
    }

    editInfo() {
        console.log('edit checked');
    }
}



let user = new User({
    name: 'John',
    age: 40,
    password: '123'
});

let admin = new Admin({
    role: 'admin',
    name: 'Bob',
    age: 20
});

let manager = new Manager({
    role: 'manager',
    name: 'David',
    age: 25,
    edit: true
});

User.createNewUser();
Admin.createNewUser();
user.sayHi();
console.log(user.name);
console.log(admin);
console.log(manager);

// примеры для деструкторизации 
let user1 = {
    name: 'John',
    age: 20,
    surname: 'Fishman',
}
let { name, ...all} = user1;

let newO =  {...all, name: 'Name'};

// console.log(name, all);

// let {name: n, age: a} = user1;
// console.log(n, a);


// let arr = [1,2];
// let [first, ...all] = arr;
// console.log(first);
let newarr = [...all,3,5,6]
