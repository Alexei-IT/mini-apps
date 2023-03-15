// let time = () => {
//     let clock = document.getElementById('clock');
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;
//     clock.children[0].innerHTML = hours;

//     let minutes = date.getMinutes();
//     if (minutes < 10) minutes = '0' + minutes;
//     clock.children[1].innerHTML = minutes;

//     let seconds = date.getSeconds();
//     if (seconds < 10) seconds = '0' + seconds;
//     clock.children[2].innerHTML = seconds;
// }
let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')
let time = setInterval(function() {
    var date = new Date();

    let hours = date.getHours()
    h.innerHTML = hours
    if (date.getHours < 10) hours = '0' + hours;

    let minutes = date.getMinutes()
    m.innerHTML = minutes
    if (minutes < 10) minutes = '0' + minutes;

    let seconds = date.getSeconds()
    s.innerHTML = seconds
    if (seconds < 10) seconds = '0' + seconds;
}, 200);