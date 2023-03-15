let tabs = document.querySelectorAll('.tab')
let content = document.querySelectorAll('.tab-content')
let openTab = (tab, block) => {
    content.forEach(item => {
        item.classList.remove('active')
        document.querySelector(`#${block}`).classList.add('active')
    })
}
tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        let id = event.target.id + `_content`
        openTab(event.target, id)
    })
})