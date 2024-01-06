const form = document.querySelector('form')

form.addEventListener('submit' , (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const calc = (weight*10000)/(height**2)

    const results = document.querySelector('#results')
    const result = results.innerHTML = `The Result is ${calc}`
})