// Deze script selecteerd de div met classname hidden
// en haalt de classname weg van deze div
// Zodat de tijdlijn, weken lijst, radio nav en de player op beeld komen
// als 1 details open is dan gaan derest weg van het scherm



// selecteer de div met classname mobile_hidden
const hiddenElementen = document.querySelector('div.hidden');

// selecteer de details elementen
// dit geeft een nodelist terug, ik heb een array nodig
let allDetails = document.querySelectorAll('details');
// zet allDetails om in een array
let allDetailsArray = Array.from(allDetails);



// loop door alle details elementen
for (let i = 0; i < allDetailsArray.length; i++) {
    let detail = allDetailsArray[i];

    // luister naar een klik op een details element
    detail.addEventListener('toggle', function () {
        if (detail.open) {
            // haal de classname "hidden" weg van de div
            // nu komen de week dagen, tijdlijn, radio nav en player op beeld
            hiddenElementen.classList.remove('hidden');

            // verwijder de details element, die open is, uit allDetailsArray
            // splice, begin bij i en haal 1 var weg
            // i is de open details element
            allDetailsArray.splice(i,1);
            console.log(allDetailsArray)

            // allDetailsArray heeft nu alleen de gesloten details elementen erin
            // 1 voor 1 alle gesloten details de classname 'hidden' geven
            for (let j = 0; j < allDetailsArray.length; j++) {
                let overigDetail = allDetailsArray[j];
                overigDetail.classList.add('hidden');
            }
        }
    });
}
