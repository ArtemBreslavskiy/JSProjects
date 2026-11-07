let button = document.createElement("button")
button.textContent = "Click!"
button.classList.add("button")
document.body.appendChild(button)

let blocks = document.createElement("div")
blocks.classList.add("blocks")
document.body.appendChild(blocks)

button.addEventListener("click", () => {
    let block = document.createElement("div")
    block.classList.add("block")
    block.style.backgroundColor = "red"
    blocks.appendChild(block)

    let colors = ["yellow", "green", "blue", "aqua", "gray", "black"]
    let count = 0

    block.addEventListener("click", () => {
        block.style.backgroundColor = colors[count]
        if (count < 6)
            count += 1
    })
})