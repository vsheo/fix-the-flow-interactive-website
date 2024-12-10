// // op de desktop website worden classes gezet voor de kleur van de sections(radiozenders + programma kaartjes)

// selecteer de sections en de articles
const sections = document.querySelectorAll('details section');
const articles = document.querySelectorAll('section article');

// de classes die toegevoegd moeten worden
const CLASSES = ["primary", "neutral"]

const primaryColor = ["veronica-primary", "slam-primary", "honderdp-primary", "sublime-primary"]
const backgroundColor =["veronica-neutral"]

// Dit alleen op desktop versie uit voeren
if (window.innerWidth >= 800) {
    for (let s = 0; s < primaryColor.length; s++) {
         // de classes primary en brand-primary aan de sections toevoegen
        sections[s].classList.add(CLASSES[0]);
        sections[s].classList.add(primaryColor[s]);
        
        // de classes neutral en brand-neutral aan de articles toevoegen
        for (let a = 0; a < articles.length; a++) {
            articles[a].classList.add(CLASSES[1]);
            articles[a].classList.add(backgroundColor[0]);
        }
    }
}
