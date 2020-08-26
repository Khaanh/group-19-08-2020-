let message = 'new message';

function print(m = 'none', count = 3) {
    console.log(arguments);
     for (let index = 0; index < count; index++) {
         console.log(m);
     }
     
}

print('Hello', 10);