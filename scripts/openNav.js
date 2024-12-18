// deze script selecteerd een button die de nav open maakt.
// de javascript heeft een eventlistener op de button.
// Als het geklikt wordt dan wordt er een class toegevoed of weggehaald(toggle) aan de button.


// selecteer de button die de nav open maakt
const navButton = document.querySelector('.open_nav')

// selecteer de navigatie menu die op beeld moet komen
const radioMenu = document.querySelector('.radio_menu')

// wacht totdat het geklikt wordt
navButton.addEventListener('click', () => {
    // voeg een class toe aan de nav, of haal het ervan af
    radioMenu.classList.toggle('nav-active');
});
