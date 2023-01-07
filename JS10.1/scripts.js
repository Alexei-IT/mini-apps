let content = document.querySelector('.popup-content')
let open = document.querySelector('button')
let close = document.querySelector('.popup-close')
let popup = document.querySelector('.popup')
let pop_bg = document.querySelector('.pop-bg')
open.addEventListener('click', (event) => {
    event.preventDefault()
    pop_bg.classList.add("open")
});
close.addEventListener('click', (e) => {
    e.preventDefault()
    pop_bg.classList.remove("open")
})
document.addEventListener('click', (event) => {
    if (event.target === pop_bg) {
        pop_bg.classList.remove("open")
    }
})