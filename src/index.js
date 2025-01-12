import "./style.css"
import { checkButton, homeHTML } from "./home"
import { menuHTML } from "./menu"
import { coconutHTML } from "./coconut"

const content = document.querySelector("#content")
const buttonsUl = document.querySelector(".side-buttons > ul")

const buttonMapping = {
    "home": homeHTML,
    "menu": menuHTML,
    "coconut": coconutHTML
}

content.appendChild(homeHTML)

buttonsUl.addEventListener("click", (e) => {
    const btn = e.target.closest("button")
    if (!btn) return

    loadPage(buttonMapping[btn.getAttribute("data-content")])
})

function loadPage(newTabHTML) {
    content.innerHTML = ""
    content.appendChild(newTabHTML)
}

checkButton.addEventListener("click", () => {
    loadPage(menuHTML)
})