/* Atribuição de elementos */
const bgCard = document.querySelector(".bg-card");
const button  = document.getElementById("btn");
const textInput = document.getElementById("colorText")
const textInputLabel = document.getElementById("colorText_label")
const hexError = document.getElementById("hexError")

/* Função para atribuição de estilos a elementos */
const getStyle = (element, style) => {
    window
    .getComputedStyle(element)
    .getPropertyValue(style)
}
var bg = getStyle(bgCard, "--bg");

/* Base de cores para a Função de troca de cores por clique; */
const colors = [ "#000", "#FA2", "#E3C", "#1FBB"]

/* Função de troca de cores pelo clique */
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

let verificaHex = () => {
    if((textInput.value.length != 3) && (textInput.value.length != 6) && (textInput.value.length != 8)) {
        /* console.log("Inválido") */
        hexError.style.setProperty("display", "flex");

    } else {
        /* console.log("Válido"); */
        hexError.style.setProperty("display", "none")
    }
}
/* Função de troca de cores pelo textInput */
let writeColor = () => {
    bg = textInput.value
    bgCard.style.setProperty("--bg", `#${bg}`)
}
/* EventListeners */
button.addEventListener("click", clickColor)
textInput.addEventListener("keyup", writeColor)
textInput.addEventListener("keyup", verificaHex)