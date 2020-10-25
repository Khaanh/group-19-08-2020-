// let parent = document.querySelector('#parent');
// let coords = document.querySelector('#coords');
// let parent2 = document.querySelector('#parent-2');

// parent.onmousemove = function(event) {
//     console.log(event.target.id);
//     coords.innerHTML = "X: " + event.clientX + ' Y:' + event.clientY;
// }

// parent2.onmousedown = function(event) {
//     console.log(event);
//     coords.innerHTML = "X: " + event.clientX + ' Y:' + event.clientY;
// }

let ball = document.querySelector('#ball');

ball.onmousedown = function (e) {
    // console.log('Client (onmousedown)', e.clientX, ball.getBoundingClientRect());
    let clickX = e.clientX - ball.getBoundingClientRect().left;
    let clickY = e.clientY - ball.getBoundingClientRect().top;
    // console.log("Diff" , clickX, clickY);

    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball)

    function onMouseMove(event) {
        moveBall(event.pageX, event.pageY);
    }

    function moveBall(x, y) {
        // console.log('Page: ', x, y);
        ball.style.left = x - clickX + 'px';
        ball.style.top = y - clickY + 'px';
    }


    document.addEventListener('mousemove', onMouseMove);

    ball.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    }
}

ball.ondragstart = function () {
    return false;
}

let form = document.querySelector('#form');

let name = form.elements.name;
let email = form.elements.email;
console.log(name);

name.onblur = function () {
    console.log(this.value);
    if (!this.value.length) {
        this.classList.add('error');
        name.focus()
    } else {
        this.classList.remove('error');
    }
}

// name.onchange = function () {
//     console.log(this.value);
//     if (!this.value.length) {
//         this.classList.add('error');
//     } else {
//         this.classList.remove('error');
//     }
// }

email.oninput = function () {
    console.log(this.value);
    if (!this.value.includes('@')) {
        this.classList.add('error');
        email.focus()
    } else {
        this.classList.remove('error');
    }
}

name.onpaste = function(event){
    event.preventDefault()
    console.log('PASTE', event);
}

name.oncopy = function(){
    console.log('COPY');
}

name.oncut = function(){
    console.log('CUT');
}