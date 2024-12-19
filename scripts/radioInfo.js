// deze script brengt de info van de website op beeld

// selecteer de button om de pop up te openen
const meerInfo = document.querySelector('.information');

// selecteer de pop up die te voorschijn komt
const popUp = document.querySelector('.de_info');
// selecteer de titel
const titel = document.querySelector('.info_title');

// sluit pop up button
const openDicht = document.querySelector('.openClose');


// lister naar een klikt op de button
meerInfo.addEventListener('click', () => {
    // haal de display none class weg van de pop up
    popUp.classList.toggle('popUp_hidden');
    titel.classList.toggle('popUp_hidden');

    // verander de text in de button, om aan te aangeefen dat het gesloten kan worden
    if (!popUp.classList.contains('popUp_hidden')) {
        openDicht.textContent = "Sluit de pop up";
    } else {
        openDicht.textContent = "Meer over ons";
    }
});
