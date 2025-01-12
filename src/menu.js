import bassImg from "./assets/images/bass.jpg"
import shrimpImg from "./assets/images/shrimp.jpg"
import clamImg from "./assets/images/clam.jpg"
import juice1Img from "./assets/images/juice1.png"
import juice2Img from "./assets/images/juice2.png"
import leftSVGImg from "./assets/svgs/arrow-left-thick.svg"
import rightSVGImg from "./assets/svgs/arrow-right-thick.svg"

export { menuHTML }

/************CREATING THE PAGE************/

/**PART 1: SPECIALS **/

const slides = []
const slidesText = []
const navIndicators = []

const menuHTML = document.createElement("div")
menuHTML.classList.add("menu-content")

const dishesTitle = document.createElement("h1")
dishesTitle.classList.add("title")
dishesTitle.textContent = "MAIN DISHES"

const carousel = document.createElement("div")
carousel.classList.add("carousel")

const buttonLeft = document.createElement("button")
buttonLeft.classList.add("carousel-button", "carousel-button--left")
const buttonLeftSVG = document.createElement("img")
buttonLeftSVG.setAttribute('data-direction', -1)
buttonLeftSVG.src = leftSVGImg
buttonLeft.appendChild(buttonLeftSVG)

const buttonRight = document.createElement("button")
buttonRight.classList.add("carousel-button", "carousel-button--right")
const buttonRightSVG = document.createElement("img")
buttonRightSVG.setAttribute('data-direction', 1)
buttonRightSVG.src = rightSVGImg
buttonRight.appendChild(buttonRightSVG)

const carouselTrackContainer = document.createElement("div")
carouselTrackContainer.classList.add("carousel-track-container")

const carouselTrack = document.createElement("ul")
carouselTrack.classList.add("carousel-track")

const carouselNav = document.createElement("div")
carouselNav.classList.add("carousel-nav")


for (let i = 0; i < 3; i++) {
    const carouselIndicator = document.createElement("button")
    carouselNav.appendChild(carouselIndicator)
    carouselIndicator.classList.add("carousel-indicator")
    navIndicators.push(carouselIndicator)
    
    if(i === 0) carouselIndicator.classList.add("current-slide")
}

const carouselTrackContainerText = document.createElement("div")
carouselTrackContainerText.classList.add("carousel-track-container-text")

const carouselTrackText = document.createElement("ul")
carouselTrackText.classList.add("carousel-track-text")

function createCarouselSlide(imagePath) {
    const li = document.createElement("li")
    li.classList.add("carousel-slide")

    const img = document.createElement("img")
    img.classList.add("carousel-image")
    img.src = imagePath
    img.loading = "lazy"

    li.appendChild(img)
    slides.push(li)
    return li
}

function createCarouselSlideText(name, price, description) {
    const li = document.createElement("li")
    li.classList.add("carousel-slide-text")

    const span = document.createElement("span")
    span.classList.add("description-header")

    const dishNameH3 = document.createElement("h3")
    dishNameH3.textContent = name

    const dishPriceH3 = document.createElement("h3")
    dishPriceH3.textContent = price

    const descriptionP = document.createElement("p")
    descriptionP.classList.add("food-description")
    descriptionP.textContent = description

    span.appendChild(dishNameH3)
    span.appendChild(dishPriceH3)

    li.appendChild(span)
    li.appendChild(descriptionP)
    slidesText.push(li)

    return li
}

const bassSlide = createCarouselSlide(bassImg)
const shrimpSlide = createCarouselSlide(shrimpImg)
const clamSlide = createCarouselSlide(clamImg)

const bassText = createCarouselSlideText(
    "Golden Crispy Sea Bass", 
    "$19.99",
    "Whole fried sea bass with a crispy crust, paired with seasoned potato wedges and fresh lime."
)

const shrimpText = createCarouselSlideText(
    "Garlic Butter Shrimp",
    "$14.99",
    "Juicy shrimp cooked in a sizzling garlic butter sauce, bursting with flavor."
)

const clamText = createCarouselSlideText(
    "Herbed Clam Bowl",
    "$16.99",
    "Steamed clams in a light garlic and white wine broth, topped with fresh herbs and served with bread."
)

menuHTML.appendChild(dishesTitle)
menuHTML.appendChild(carousel)

carousel.appendChild(buttonLeft)

carousel.appendChild(carouselTrackContainer)
carouselTrackContainer.appendChild(carouselTrack)
carouselTrack.appendChild(bassSlide)


carousel.appendChild(buttonRight)

carousel.appendChild(carouselNav)

carousel.appendChild(carouselTrackContainerText)
carouselTrackContainerText.appendChild(carouselTrackText)
carouselTrackText.appendChild(bassText)

/** PART 2: DRINKS **/

const drinksTitle = document.createElement("h1")
drinksTitle.classList.add("beverages-title", "title")
drinksTitle.textContent = "BEVERAGES"

const beverages = document.createElement("div")
beverages.classList.add("drinks-menu")

// Drinks

// Drinks One
const drinksOne = document.createElement("table")
drinksOne.classList.add("drinks-table", "drinks-one")

const drinksOneImg = document.createElement("img")
drinksOneImg.src = juice1Img
drinksOneImg.classList.add("drinks-img", "drinks-one-img")

// Drinks Two
const drinksTwo = document.createElement("div")
drinksTwo.classList.add("drinks-table", "drinks-two")

const drinksTwoImg = document.createElement("img")
drinksTwoImg.src = juice2Img
drinksTwoImg.classList.add("drinks-img", "drinks-two-img")

// Filling the first list

function createDrink(name, price, table) {
    const row = document.createElement("tr")

    const nameTd = document.createElement("td")
    nameTd.textContent = name

    const priceTd = document.createElement("td")
    priceTd.textContent = price

    row.appendChild(nameTd)
    row.appendChild(priceTd)

    table.appendChild(row)
}

const drinksOneData = [
    ["Coconut Water", "$4"],
    ["Pineapple Juice", "$4.50"],
    ["Mango Lassi", "$5"],
    ["Passionfruit Iced Tea", "$4.50"],
    ["Tropical Lemonade", "$4"],
    ["Guava Cooler", "$5.50"],
    ["Papaya Smoothie", "$6"],
    ["Watermelon Slush", "$5"],
    ["Lime Spritzer", "$3.50"],
    ["Sea Breeze Iced Tea", "$4.75"]
]

const drinksTwoData = [
    ["Virgin Pina Colada", "$6"],
    ["Mango Mojito", "$6.50"],
    ["Blue Lagoon Mocktail", "$6"],
    ["Coconut Cream Soda", "$5"],
    ["Beach Sunrise (Orange + Grenadine)", "$6"],
    ["Tropical Punch", "$5.50"],
    ["Frozen Strawberry Daiquiri (Mocktail)", "$7"],
    ["Island Breeze (Pineapple + Cranberry)", "$5"],
    ["Sparkling Hibiscus Lemonade", "$5.50"],
    ["Ocean Mist Mocktail (Blue Curaçao Syrup + Lemon)", "$6.75"]
]

drinksOneData.forEach(arr => createDrink(arr[0], arr[1], drinksOne))
drinksTwoData.forEach(arr => createDrink(arr[0], arr[1], drinksTwo))

/*--------Appending to the main divs---------*/
beverages.appendChild(drinksOne)
beverages.appendChild(drinksOneImg)

beverages.appendChild(drinksTwo)
beverages.appendChild(drinksTwoImg)

menuHTML.appendChild(drinksTitle)
menuHTML.appendChild(beverages)

/************CAROUSEL LOGIC************/


let currentIndex = 0
buttonRight.addEventListener("click", slide)
buttonLeft.addEventListener("click", slide)


function slide(e) {
    const dir = +e.target.getAttribute('data-direction')
    const currentSlide = slides[currentIndex]
    const currentSlideText = slidesText[currentIndex]
    const currentNavIndicator = navIndicators[currentIndex]

    carouselTrack.removeChild(currentSlide)
    carouselTrackText.removeChild(currentSlideText)
    currentNavIndicator.classList.remove("current-slide")

    currentIndex = (((currentIndex + dir) % slides.length) + slides.length) % slides.length

    const nextSlide = slides[currentIndex]
    const nextSlideText = slidesText[currentIndex]
    const nextNavIndicator = navIndicators[currentIndex]

    carouselTrack.appendChild(nextSlide)
    carouselTrackText.appendChild(nextSlideText)
    nextNavIndicator.classList.add("current-slide")

}

