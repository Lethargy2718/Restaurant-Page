export { homeHTML, checkButton }

const homeHTML = document.createElement("div")
homeHTML.classList.add("home-content")

const title = document.createElement("p")
title.id = "welcome"
title.textContent = "WELCOME TO SHELLY SHORES"

const description = document.createElement("p")
description.id = "welcomeDescription"
description.textContent = "Your tropical escape for refreshing meals and beachside vibes"

const checkButton = document.createElement("button")
checkButton.id = "checkMenu"
checkButton.textContent = "Check out the menu"

homeHTML.appendChild(title)
homeHTML.appendChild(description)
homeHTML.appendChild(checkButton)