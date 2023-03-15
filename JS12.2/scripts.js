let black1 = document.querySelector('.black1')
let white1 = document.querySelector('.white1')

let body = document.querySelector('body')
black1.addEventListener('click', () => {
    body.classList.add('black')
    black1.classList.add('none')
    white1.classList.add('block')

})
white1.addEventListener('click', () => {
    body.classList.remove('black')
    white1.classList.remove('block')
    black1.classList.remove('none')
})