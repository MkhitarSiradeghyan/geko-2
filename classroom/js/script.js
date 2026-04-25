document.addEventListener("click", (event) => {
    const x = event.clientX
    const y = event.clientY
    const srt = document.createElement("div")
    srt.className = "srt"
    srt.textContent = "❤"
    srt.style.left = `${x}px`
    srt.style.top = `${y}px`
    document.body.prepend(srt)
    const timer = setTimeout(() => {
        srt.remove()
        clearTimeout(timer)
    }, 1990);
})