import cocoImg from "./assets/images/coconut.png"

export { coconutHTML }

const coconutHTML = document.createElement("div")

const coco = document.createElement("img")
coco.src = cocoImg
coco.id = "coco"

coconutHTML.appendChild(coco)
