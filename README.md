
Ontwerp en maak een interactieve website voor een opdrachtgever.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/INSTRUCTIONS.md)

# Fix the flow
<!-- Geef je project een titel en schrijf in één zin wat het is -->
interacties op de website.


## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
### mobiele versie
#### start pagina
![image](https://github.com/user-attachments/assets/8d73da65-43bb-44e0-9720-ff4dd6c85a6b)
De gebruiker begint op een overzichtspagina waar hij alle radiozenders ziet. Onder de radio-logo's is er een label, zodat de gebruiker weet dat er op geklikt kan worden.

#### meer info button

https://github.com/user-attachments/assets/c529f63a-77a9-44d3-bc5c-f4653cd6a684

Als de gebruiker op de knop klikt, verschijnt er meer informatie over wat de gebruiker allemaal op de website kan doen.

#### radiozender open  
![image](https://github.com/user-attachments/assets/92698914-71a5-4b2d-9747-979e84eae33b)
De gebruiker opent de radiozender en kan het programma van vandaag zien. Ook kan de gebruiker de programma’s van de afgelopen en aankomende dagen bekijken. Het onderste programma is gedeeltelijk afgesneden, wat indirect aangeeft dat er naar boven en beneden gescrolled kan worden. De weekdagen bovenaan hebben een scrollbar, wat aangeeft dat de gebruiker daar doorheen kan scrollen. De dag van vandaag is gemarkeerd, wat aangeeft dat de andere dagen aangeklikt kunnen worden.

#### radio menu  

https://github.com/user-attachments/assets/f5789e6f-bbbe-45db-9d90-a92d7189cb3a  

Als de gebruiker naar een andere radiozender wil, kan dat via het hamburgermenu. Omdat het hamburgermenu zeer bekend is, fungeert dit als feedforward, maar ik heb toch een label toegevoegd voor meer duidelijkheid.
Om het menu te sluiten, is er een button met een kruisje in het menu.


### desktop versie
#### start pagina
![image](https://github.com/user-attachments/assets/b52aafa3-340f-4f24-81af-30715927272b)
De gebruiker begint direct op een overzichtspagina, waarbij de eerste radiozender open is. De scrollbar geeft ook hier aan dat er gescrold kan worden.

#### door de programma scrollen

https://github.com/user-attachments/assets/20db36ae-92e1-4464-b070-0bfac26e49bc

De verticale scroll wordt omgezet naar een horizontale scroll, zodat de gebruiker makkelijk met de muis door het programma kan navigeren. Als de gebruiker door het programma scrolt, beweegt de tijdlijn mee.

#### nieuwe programma open maken

https://github.com/user-attachments/assets/71769ce4-eb31-4d8c-9e92-434fc0518c2f

De gebruiker kan ook op andere radiozenders klikken om het programma van die radiozender te zien. Naast het logo staat een label, zodat de gebruiker weet wat er gebeurt als erop geklikt wordt. Wanneer er op een nieuwe radiozender wordt geklikt, sluit de vorige.

#### radio player site

https://github.com/user-attachments/assets/aca2a927-ea1f-4151-b3d3-d8a845f5933e

Als de gebruiker op de knop binnen de programkaart klikt, wordt hij doorverwezen naar de bijbehorende website. Deze website is bedoeld om op de achtergrond te blijven openstaan terwijl de gebruiker naar het programma luistert.

<!-- Voeg een link toe naar Github Pages 🌐-->
link naar de website: https://vsheo.github.io/fix-the-flow-interactive-website/
## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
De interacties werken door de HTML-elementen te selecteren in JavaScript en daar een event listener aan toe te voegen. Dit kan een klik, scroll, toggle of verandering van schermgrootte zijn. 
Wanneer de event plaats vindt, worden er classes toegevoegd of verwijderd van deze elementen. Met CSS wijzig ik de positie, display of voeg ik een animatie toe.

Ik gebruik ook enkele stukken code waarin ik document.querySelectorAll gebruik om meerdere elementen te selecteren. Vervolgens gebruik ik een loop om classes toe te voegen of te verwijderen.


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

