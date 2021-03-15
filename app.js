const formAddTodo = document.querySelector('.form-add-todo')
const ul = document.querySelector('.todos-container')
const busca = document.querySelector('.form-search input')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()

    if (inputValue) {
        ul.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${ inputValue }</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
        `
        event.target.reset()
    }
})

ul.addEventListener('click', event => {
    const clickedElem = event.target

    const lixeira = Array.from(clickedElem.classList).includes('delete')

    if (lixeira) {
        clickedElem.parentElement.remove()
    }
})

busca.addEventListener('input', event => {
    const itens = Array.from(ul.children)
    const inputValue = event.target.value.trim().toLowerCase()
    
    // hide todos
    itens
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.classList.add('hidden')
        todo.classList.remove('d-flex')
    })

    //show todos
    itens
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('hidden')
        todo.classList.add('d-flex')
    })

})