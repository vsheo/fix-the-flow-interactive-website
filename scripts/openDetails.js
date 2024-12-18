// deze script luisterd naar wanneer er op een button in de radio nav geklikt wordt.
// daarna wordt de programma veranderd, afhankelijk van welke button geklikt wordt


// selecteer alle buttons
const detailButtons = document.querySelectorAll('.nav_button');

// selecteer de sluit button
const closeButton = document.querySelector('.close_nav');

// selecteer alle details elementen
const detailsAll = document.querySelectorAll('details');
console.log(detailsAll[0],detailsAll[1], detailsAll[2], detailsAll[3]);


detailButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e);

        // haal de oude highlight weg
        navHighlightReset();
        // zet highlight op de nieuwe button
        e.currentTarget.classList.add('nav_button-active');

        // loop door alle details elementen
        detailsAll.forEach((detail) => {
            // als de details element open is
            if (detail.open) {
                // maak die details element dicht
                detail.open = false;
                // en haal de summary weg van beeld met de class 'hidden'
                detail.classList.add('hidden');
            }
        });

        // als de button, de class 'open_veronica' heeft, dan gaat de details element voor veronica open
        if (button.classList.contains('open_veronica')) {
            console.log('veronica', detailsAll[0]);

            // haal de class 'hidden' weg zodat het op beeld komt
            detailsAll[0].classList.remove('hidden');
            // maak het details element open
            detailsAll[0].open = true;
        }
        else if (button.classList.contains('open_slam')) {
            console.log('slam!', detailsAll[1]);

            detailsAll[1].classList.remove('hidden');
            detailsAll[1].open = true;
        }
        else if (button.classList.contains('open_sublime')) {
            console.log('sublime', detailsAll[2]);

            detailsAll[2].classList.remove('hidden');
            detailsAll[2].open = true;
        }
        else if (button.classList.contains('open_honderdp')) {
            console.log('100%.NL', detailsAll[3]);

            detailsAll[3].classList.remove('hidden');
            detailsAll[3].open = true;
        }
    });
});

closeNav(closeButton);



function navHighlightReset() {
    detailButtons.forEach(button => {
        button.classList.remove('nav_button-active');
    });
};

function closeNav(button) {
    button.addEventListener('click', () => {
        radioMenu.classList.remove('nav-active');
    });    
}


// https://stackoverflow.com/questions/77176535/how-to-target-this-button-in-the-if-condition-in-vanilla-javascript
// https://stackoverflow.com/questions/5085567/what-is-the-hasclass-function-with-plain-javascript

