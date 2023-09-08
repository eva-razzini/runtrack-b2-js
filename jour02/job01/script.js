// Fonction pour changer la couleur de fond en fonction de la taille de l'écran
function myChangeBackgroundColor() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1337) {
        document.documentElement.style.backgroundColor = "#ffb703";
    } else if (screenWidth >= 505 && screenWidth <= 1336) {
        document.documentElement.style.backgroundColor = "#d90429";
    } else if (screenWidth <= 504) {
        document.documentElement.style.backgroundColor = "#003049";
    }
}

// Appelez la fonction au chargement de la page
window.onload = myChangeBackgroundColor;

// Ajoutez un écouteur d'événement pour redimensionner la fenêtre
window.addEventListener("resize", myChangeBackgroundColor);
