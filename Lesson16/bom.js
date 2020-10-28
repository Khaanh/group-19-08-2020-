let assign = document.querySelector('#assign');
let go = document.querySelector('#go');

assign.onclick = function () {
    window.location.assign('https://learn.javascript.ru/')
}
go.onclick = function () {
    console.log(window.history.forward());
}

console.log();

navigator.geolocation.getCurrentPosition(
    (data) => {
        console.log(data);
    }, (error) => {
        console.log(error);
    }
);
const successCb = (data) => {
    let video = document.querySelector('#video');
    video.srcObject = data;
    video.play();
    console.log(data);
}

const errorCb = (error) => {
    console.log(error);
}
navigator.getBattery().then(data=> {console.log(data);})
console.log(navigator.getBattery());
// navigator.getUserMedia({ video: true, audio: false}, successCb, errorCb )