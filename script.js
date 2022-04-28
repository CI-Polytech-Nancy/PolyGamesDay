function showPopup(game) {
    document.getElementById("popup").id = "popupActivated";
    document.getElementById("overlay").id = "overlayActivated";

    content = document.getElementById("popupContent");
    title = document.getElementById("popupTitle");

    content.textContent = "Le tournoi s'organise de la manière suivante :\n\n";

    if (game === 1) {
        title.textContent = "Rocket League";
        content.textContent += "• Affrontements en équipes de 2 personnes\n";
        content.textContent += "• Arbre de tournoi à double élimination\n";
        content.textContent += "• Matchs en BO3 et finale en BO5"; 
    } else {
        title.textContent = "League of Legend";
        content.textContent += "• Affrontements en équipes de 5 personnes\n";
        content.textContent += "• Phase de poules en BO1, quart et demi finales en BO3 et finale en BO5\n"; 
        content.textContent += "• Poules de 4 équipes, seulement les 2 meilleures se qualifient"
    }

    content.textContent += "\n\nVous devrez payer 5€ supplémentaires si vous n'êtes pas cotisant et que vous prennez le tarif cotisant."
}

function closePopup() {
    document.getElementById("popupActivated").id = "popup";
    document.getElementById("overlayActivated").id = "overlay";
}

function buttonDisplay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = "1";
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = "0";
        mybutton.style.visibility = "hidden";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

mybutton = document.getElementById("scrollBtn")