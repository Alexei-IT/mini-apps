let butt = document.querySelector('.send')

let input = document.querySelector('.in')
let help = document.querySelector('.help')
let form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('kdzfbvsd')
    let label = document.createElement('label')
    let check = document.createElement('input')
    let close = document.createElement('button')
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    let fa = document.createElement('i')

    fa.className = 'fa fa-check icon'
    check.classList.add('label__checkbox')
    span1.classList.add('label__text')
    span2.classList.add('label__check')
    span2.appendChild(fa)
    span1.appendChild(span2)

    close.className = 'back open'
    label.classList.add('label')

    check.type = 'checkbox'
    label.innerText = input.value

    label.appendChild(check)
    label.appendChild(span1)
    label.append(close)
    help.appendChild(label)
    input.value = ''
    label.addEventListener('click', (event) => {
        if (check.checked) {
            label.classList.add('line')
            fa.classList.add('notLine')
            close.classList.add('notLine')
            help.append(label)
        } else {
            label.classList.remove('line')


            help.prepend(label)
        }
    })

    close.addEventListener('click', () => {
        label.classList.add('none')
    })
})