let butt = document.querySelector('.send')
let wrapp = document.querySelector('.help-wr')
let input = document.querySelector('.in')
let help = document.querySelector('.help')
let form = document.querySelector('form')
let area = document.querySelector('.ar')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let about = document.createElement('div')
    let content = document.createElement('div')
    let t1 = document.createElement('span')
    let close = document.createElement('div')
    close.classList.add('close')
    close.innerText = '+'
    t1.innerText = input.value
    about.innerText = area.value
    help.classList.add('none')
    content.appendChild(t1)
    content.appendChild(about)
    wrapp.appendChild(content)
    t1.appendChild(close)
    content.classList.add('item')
    t1.classList.add('t1')
    about.classList.add('about')
    input.value = ''
    area.value = ''
    close.addEventListener('click', () => {
        content.classList.add('none')
    })

})