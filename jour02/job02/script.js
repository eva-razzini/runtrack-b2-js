// Fonction pour incrémenter le compteur
function myAddCount() {
    // Sélectionner le paragraphe avec l'ID "count-displayer"
    var countDisplayer = document.getElementById("count-displayer");

    // Récupérer la valeur actuelle du compteur
    var currentCount = parseInt(countDisplayer.textContent);

    // Incrémenter le compteur
    var newCount = currentCount + 1;

    // Mettre à jour le texte du paragraphe avec le nouveau compteur
    countDisplayer.textContent = newCount;
}

// Sélectionner le bouton avec l'ID "add-count-btn"
var addButton = document.getElementById("add-count-btn");

// Ajouter un écouteur d'événements au clic du bouton pour appeler la fonction myAddCount
addButton.addEventListener("click", myAddCount);
