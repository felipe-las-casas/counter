reset = () => {
    let h2 = document.querySelector('h2')
    count = 0
    h2.innerText = count
}

increase = (count) => {
    count = parseInt(document.querySelector('h2').textContent)
    count = count + 1
    let h2 = document.querySelector('h2')
    h2.textContent = count
}

decrease = (count) => {
    count = document.querySelector('h2').textContent
    count = count - 1
    let h2 = document.querySelector('h2')
    h2.textContent = count
}

