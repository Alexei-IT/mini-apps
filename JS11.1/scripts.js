let arr = document.querySelectorAll('.one')
let body = document.querySelector('body')
let t = document.querySelector('t')
if (localStorage.url) {
    body.style.backgroundImage = `url(${JSON.parse(localStorage.url)})`
} else {
    body.backgroundImage = `url(${t.src})`
}
for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', (event) => {
        arr.forEach(item => {
            if (item == event.target) {
                item.classList.add('active')
                localStorage.url = JSON.stringify(item.src)
                let url = localStorage.url
                body.style.backgroundImage = `url(${JSON.parse(url)})`
            } else {
                item.classList.remove('active')
            }
        })
    })
}