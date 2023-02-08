const resetNavboxButtonColor = () => {
    let buttons = document.getElementsByClassName("navbox-button")
    buttons = Array.from(buttons)
    console.log(buttons)
    buttons.map(button => {
        console.log(button)
        button.style.backgroundColor = null
        button.style.color = null
    })
}

export default {resetNavboxButtonColor}