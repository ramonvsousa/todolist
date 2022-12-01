window.onload = function () {
    const form = document.querySelector('#form')
    const ul = document.querySelector('#tableItens')

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        let formValue = document.querySelector('#item').value

        if (!formValue) return

        //template literals
        ul.innerHTML += `<li
                            class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between">
                            <span>${formValue}</span>
                            <i class="ph-trash delete"></i>
                        </li>`

        /*.createElement()
        const li = document.createElement('li')
        li.setAttribute("class", "px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between")
        li.textContent = formValue

        const deleteButton = document.createElement('button')
        deleteButton.setAttribute("class", "text-red-700 delete")
        deleteButton.textContent = "x"

        li.appendChild(deleteButton)
        ul.appendChild(li)
        */

        /*.
        cloneNode()
        const li = ul.querySelector('li').cloneNode(true)
        li.querySelector('span').textContent = formValue
        ul.appendChild(li)
        */

        form.querySelector('#item').value = ''
    })

    ul.addEventListener('click', function (event) {
        if (event.target.classList.contains('ph-trash')){
            if (confirm('Deletar item?')){
                event.target.parentElement.remove()
            }
        }
    })
}