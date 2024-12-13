// deze script zorgt ervoor dat de programma en de tijdlijn gezaamelij scrollen


// selecteer alle programma's
const programma = document.querySelectorAll("details section");
// selecteer de tijdlijn 
const tijdLijn = document.querySelector(".tijd");
// console.log(programma);
// console.log(tijdLijn);



// https://dev.to/juanbelieni/how-to-create-horizontal-scroll-with-mouse-wheel-using-javascript-4cm5
// gebruikt de mouse wheel om links en rechts te scrollen (voor de programma en de tijdlijn)

// ga door alle section(radiozenders)
programma.forEach(function (section) {
  // luister naar een scroll
  section.addEventListener("wheel", (event) => {
    event.preventDefault();
  
    // verander de verticale scroll naar een horizontale scroll
    // voor de radiozenders
    section.scrollBy({
      left: event.deltaY * 3,
      behavior: "smooth",
    });

    // voor de tijdlijn
    tijdLijn.scrollBy({
      left: event.deltaY * 3,
      behavior: "smooth",
    });
  });
});





