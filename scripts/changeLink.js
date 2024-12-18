// deze script veranderd de linkjes binnen de programma's
// zodat de player website alleen op desktop versie werkt

// selecteer de hidden en active links
const activeLink = document.querySelectorAll('.link_active');
const hiddenLink = document.querySelectorAll('.hidden_link');
console.log(hiddenLink);

desktopLink();

// wissel de hidden en active classes op desktop
function desktopLink() {
    if (window.innerWidth >= 800) {
        activeLink.forEach(function(link) {
            link.classList.remove('link_active');
            link.classList.add('hidden_link');
        });
        
        hiddenLink.forEach(function(link) {
            link.classList.remove('hidden_link');
            link.classList.add('mobile_link');
        });
    }
}