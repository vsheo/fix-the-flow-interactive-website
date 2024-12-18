// op de desktop website worden classes gezet voor de kleur van de sections(radiozenders de summaries en de programma kaartjes)

// selecteer de sections en de articles
const sections = document.querySelectorAll('details section');
const articles = document.querySelectorAll('section article');
const summaries = document.querySelectorAll('details summary');
console.log(summaries);

// de classes die toegevoegd moeten worden
const primary = ["primary"]
const backgroundColor =["neutral"]


const brand = ["veronica", "slam", "honderdp", "sublime"]

// Dit alleen op desktop versie uit voeren
if (window.innerWidth >= 800) {
    for (let s = 0; s < brand.length; s++) {
         // de classes primary en de brand aan de sections toevoegen
        sections[s].classList.add(primary[0]);
        sections[s].classList.add(brand[s]);
        
        // de classes neutral en de brand aan de articles toevoegen
        for (let a = 0; a < articles.length; a++) {
            articles[a].classList.add(backgroundColor[0]);
            articles[a].classList.add(brand[0]);
        }
    }

    // desktop summary colors
    summaryColors(summaries);
}

// voeg kleuren toe aan de summary
function summaryColors(summaries) {
    // veronica
    summaries[0].classList.add('veronica');
    summaries[0].classList.add('primary');
    summaries[0].classList.add('text-on-brand');

    // slam
    summaries[1].classList.add('slam');
    summaries[1].classList.add('secondary');
    summaries[1].classList.add('text-on-brand');

    // sublime
    summaries[2].classList.add('sublime');
    summaries[2].classList.add('secondary');
    summaries[2].classList.add('text-on-brand');

    // honderdp
    summaries[3].classList.add('honderdp');
    summaries[3].classList.add('secondary');
    summaries[3].classList.add('text-on-brand');
};