let button = document.createElement("button")
button.textContent = "Click!"
document.body.appendChild(button)

button.addEventListener("click", () => {
    let block = document.createElement("div")
    block.classList.add("block")
    block.style.backgroundColor = "red"
    document.body.appendChild(block)

    block.addEventListener("click", () => {
        block.style.backgroundColor = "blue"
    })
})