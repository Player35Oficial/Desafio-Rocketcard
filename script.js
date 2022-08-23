const bgCard = document.querySelector(".bg-card");
const button  = document.getElementById("btn");

const getStyle = (element, style) => {
    window
        .getComputedStyle(element)
        .getPropertyValue(style)
}

let bg = getStyle(bgCard, "--bg");
const colors = [ "#000", "#FA2", "#E3C", "#1FBB"]


let change = () => {
    if (bg == undefined || bg == colors[0]) {
        bg = colors[1]
    } else if (bg == colors[1]) {
        bg = colors[2]
    } else if (bg == colors[2]) {
        bg = colors[3]
    } else if (bg == colors[3]) {
        bg = colors[0]
    }
    bgCard.style.setProperty("--bg", bg)
}

button.onclick = change;