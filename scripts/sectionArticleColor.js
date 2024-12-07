// // op de desktop website worden classes gezet voor de kleur van de sections(radiozenders + programma kaartjes)

// // selecteer alle sections
// const sections = document.querySelectorAll('details section');

// // selecteer alle articles, per radiozender
// const veronicaAllArticles = document.querySelectorAll('details:nth-of-type(1) section article');
// const slamAllArticles = document.querySelectorAll('details:nth-of-type(2) section article');
// const honderdpAllArticles = document.querySelectorAll('details:nth-of-type(3) section article');
// const sublimeAllArticles = document.querySelectorAll('details:nth-of-type(4) section article');

// // zet de bovenstaande variables in een array, om later door heen te gaan met een loop
// const allArticles = ["veronicaAllArticles", "slamAllArticles", "honderdpAllArticles", "sublimeAllArticles"];

// // de classes die toegevoegd moeten worden
// const primary = ["primary"]
// const background = ["neutral"]

// const primaryColor = ["veronica-primary", "slam-primary", "honderdp-primary", "sublime-primary"]
// const backgroundColor =["veronica-neutral", "slam-neutral", "honderdp-neutral", "sublime-neutral"]


// // Dit alleen op desktop versie uit voeren
// if (window.innerWidth >= 800) {
//     for (let s = 0; s < primaryColor.length; s++) {
//          // de classes primary en brand-primary aan de sections toevoegen
//         sections[s].classList.add(primary[0]);
//         sections[s].classList.add(primaryColor[s]);

//         // de classes neutral en brand-neutral aan de articles toevoegen
//         if (sections[s]) {
//             for (let a = 0; a < allArticles[s].length; a++) {
//                 allArticles[s][a].classList.add(background[0]);
//                 allArticles[s][a].classList.add(backgroundColor[s]);
//             }
//         }
//     }
// }










// // op de desktop website worden classes gezet voor de kleur van de sections(radiozenders + programma kaartjes)

// // selecteer de sections en de articles
// const sections = document.querySelectorAll('details section');
// const articles = document.querySelectorAll('section article');

// // de classes die toegevoegd moeten worden
// const primary = ["primary"]
// const background = ["neutral"]

// const primaryColor = ["veronica-primary", "slam-primary", "honderdp-primary", "sublime-primary"]
// const backgroundColor =["veronica-neutral"]

// // Dit alleen op desktop versie uit voeren
// if (window.innerWidth >= 800) {
//     for (let s = 0; s < primaryColor.length; s++) {
//          // de classes primary en brand-primary aan de sections toevoegen
//         sections[s].classList.add(primary[0]);
//         sections[s].classList.add(primaryColor[s]);
        
//         // de classes neutral en brand-neutral aan de articles toevoegen
//         for (let a = 0; a < articles.length; a++) {
//             articles[a].classList.add(background[0]);
//             articles[a].classList.add(backgroundColor[0]);
//         }
//     }
// }






