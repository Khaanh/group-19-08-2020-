






let info =  {
    name: 'Вася',
    age: 10,
    location: {
        city: 'Харьков'
    }
};
let jsonInfo = JSON.stringify(info)
console.log(
    JSON.parse(jsonInfo)
);
