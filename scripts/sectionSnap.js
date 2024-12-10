// https://codepen.io/shooft/pen/WNVZYeZ

const snapElement = document.querySelector(".snapElement");
const snapDetails = document.querySelectorAll("details");
console.log(snapElement, snapDetails);


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


function scrollToTop(e) {
	// alleen op desktop
    if (window.innerWidth >= 800) {
		// oude niet meer open
		const nuOpen = document.querySelector(".snapElement");
		if (nuOpen) {
			// section die open is, dicht maken
			nuOpen.open = false;
			nuOpen.classList.remove("snapElement");
		}
		
		// nieuwe naar het midden
		const theDetail = e.currentTarget;
		theDetail.scrollIntoView({ behavior: "smooth", block: "start" });
		theDetail.classList.add("snapElement");
	}
}
