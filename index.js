document.querySelector('form').addEventListener('submit', addTodo)

function addTodo(event) {
    event.preventDefault()

    const list = document.createElement('li')
    const input = document.getElementById('item')
    list.innerText = input.value
    list.addEventListener('click', completeTodo)


    const newButton = document.createElement('button')
    newButton.innerText = 'x'
    newButton.addEventListener('click', removeTodo)
    list.append(newButton)

    document.querySelector('ul').appendChild(list)
}

function removeTodo(event) {
    event.target.parentNode.remove()
}

function completeTodo(event) {
    let value = event.target.getAttribute('aria-checked')
    if (value !== 'true') {
        event.target.setAttribute('aria-checked', 'true')
    } else {
        event.target.setAttribute('aria-checked', 'false')
    }
}