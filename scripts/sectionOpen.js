// deze script kijkt naar wanneer de scherm een desktop scherm is
// als dat het geval is dan komen alle summaries, van de radiozenders op beeld
// als er op een geklikt wordt dan gaat die open, en de vorige dicht.
// de nieuwe die open is gaat naar boven


// https://codepen.io/shooft/pen/WNVZYeZ

const snapElement = document.querySelector(".snapElement");
const snapDetails = document.querySelectorAll("details");
// console.log(snapElement, snapDetails);


// run openSnapElement wanneer de pagina inlaad en wanneer de pagina verandert van grootte
window.addEventListener('load', openSnapElement);
window.addEventListener('resize', openSnapElement);


snapDetails.forEach(section => {
	section.addEventListener("click", scrollToTop);
});


// wanneer de pagina inlaad is de details element met de class snapElement open
function openSnapElement() {
    if (window.innerWidth >= 800) {
        snapElement.open = true;
    }
}


// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
function scrollToTop(e) {
	// alleen op desktop
    if (window.innerWidth >= 800) {
		// oude niet meer open
		const wasOpen = document.querySelector(".snapElement");
		if (wasOpen) {
			// section die open is, dicht maken
			wasOpen.open = false;
			wasOpen.classList.remove("snapElement");
		}

		// e.currentTarget, is het element waarop een interactie is uitgevoerd
		let nuOpen = e.currentTarget

		// nieuwe section open maken
		nuOpen.classList.add("snapElement");
	};
}
