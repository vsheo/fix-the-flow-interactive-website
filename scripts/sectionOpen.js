// deze script kijkt naar wanneer de scherm een desktop scherm is
// als dat het geval is dan komen alle summaries, van de radiozenders op beeld
// als er op een geklikt wordt dan gaat die open, en de vorige dicht.
// de nieuwe die open is gaat naar boven


// https://codepen.io/shooft/pen/WNVZYeZ

const snapElement = document.querySelector(".snapElement");
const snapDetails = document.querySelectorAll("details");
// console.log(snapElement, snapDetails);

// selecteer de radiozender die open is
const veronica = document.querySelector(".veronica");
// selecteer de radiozenders die gesloten zijn
const slam = document.querySelector(".slam");
const sublime = document.querySelector(".sublime");
const honderdp = document.querySelector(".honderdp");

// array met alle radiozenders
const alleRadiozenders = [veronica, slam, sublime, honderdp];


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
			// haal de positie weg (niet meer boven)
			wasOpen.classList.remove("open");
		}
		
		// nieuwe section open maken
		// e.currentTarget, is het element waarop een interactie is uitgevoerd
		e.currentTarget.classList.add("snapElement");

		// het element die nu open is, dit geeft de die radiozender terug
		currentOpen = zoekCurrent(e.currentTarget);
		// geef de class open aan deze element
		currentOpen.classList.add("open");


		
		geslotenRadioZenders = nieuwGesloten(alleRadiozenders, currentOpen);
		console.log(geslotenRadioZenders);

		// hier wordt de layout veranderd, zodat de open radiozender helemaal boven staat
		// haal eerst alle layout classes weg
		// slam.classList.remove("eersteGesloten");
		// sublime.classList.remove("tweedeGesloten");
		// honderdp.classList.remove("derdeGesloten");


		// geef nu de overige 3 de gesloten classes


	}
}


// deze functie geeft de class van het element die geklikt is terug
function zoekCurrent(e) {
	if (e.classList.contains("veronica")) {	
		// console.log(veronica);
		return veronica;
	} else if (e.classList.contains("slam")) {
		// console.log(slam);
		return slam;
	} else if (e.classList.contains("sublime")) {
		// console.log(sublime);
		return sublime;
	} else if (e.classList.contains("honderdp")) {
		// console.log(honderdp);
		return honderdp;
	}
}

// de overige radiozenders worden hier gesloten
function nieuwGesloten(alleRadiozenders, currentOpen) {

	// zoek de positie van currentOpen in de array
	let currentOpenPosition = alleRadiozenders.indexOf(currentOpen);
	// haal currentOpen uit de array van alleRadiozenders
	let geslotenRadioZenders = alleRadiozenders.splice(currentOpenPosition, 1);


	// eerst alle gesloten classes weg halen van alle elementen
	alleRadiozenders.forEach(radio => {
		radio.classList.remove("eersteGesloten");
		radio.classList.remove("tweedeGesloten");
		radio.classList.remove("derdeGesloten");
	});

	// gesloten classes toevoegen aan de 3 gesloten radiozenders
	geslotenRadioZenders.forEach(radio => {
		radio.classList.add("eersteGesloten");
		radio.classList.add("tweedeGesloten");
		radio.classList.add("derdeGesloten");
	});
}