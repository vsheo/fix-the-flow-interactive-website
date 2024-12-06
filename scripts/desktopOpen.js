// deze script kijk naar hoe groot de scherm is.
// als het groter is dan 800px dan wordt de eerste details element open gemaakt.\



// selecteer de details element die als eerst open is
let snapElement = document.querySelector('.snapElement');

// wanneer de pagina inlaad is de details element met de class snapElement open
if (window.innerWidth >= 800) {
    snapElement.open = true;
}