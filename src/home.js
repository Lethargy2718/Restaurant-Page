export { homeHTML }



const homeHTML = document.createElement("div")
homeHTML.classList.add("home-content")
homeHTML.innerHTML = `
<div class="home-content">
    <p id="welcome">WELCOME TO SHELLY SHORES</p>
    <p id="welcomeDescription">Your tropical escape for delicious cuisine and beachside vibes</p>
    <button id="checkMenu">Check out the menu</button>
</div>
`