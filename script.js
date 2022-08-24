const bgCard = document.querySelector(".bg-card");
const button  = document.getElementById("btn");
const textInput = document.getElementById("colorText")

const getStyle = (element, style) => {
    window
    .getComputedStyle(element)
    .getPropertyValue(style)
}
var bg = getStyle(bgCard, "--bg");

const colors = [ "#000", "#FA2", "#E3C", "#1FBB"]


let clickColor = () => {
    if (bg == undefined || bg == colors[0]) {
        bg = colors[1]
    } else if (bg == colors[1]) {
        bg = colors[2]
    } else if (bg == colors[2]) {
        bg = colors[3]
    } else if (bg == colors[3]) {
        bg = colors[0]
    } else if (bg != colors[0] || colors[1] || colors[2] || colors[3] || colors[4] ) {
        bg = colors[0]
    }
    bgCard.style.setProperty("--bg", bg)
}


let writeColor = () => {
    bg = textInput.value
    bgCard.style.setProperty("--bg", `#${bg}`)
}
button.addEventListener("click", clickColor)
textInput.addEventListener("keyup", writeColor)