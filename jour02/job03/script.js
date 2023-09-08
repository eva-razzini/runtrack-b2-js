// Sélectionner les éléments HTML par leur ID
var textDisplayer = document.getElementById("text-displayer");
var inputText = document.getElementById("input-text");
var turnTextBoldBtn = document.getElementById("turn-text-bold");
var turnTextItalicBtn = document.getElementById("turn-text-italic");
var clearTextBtn = document.getElementById("clear-text");

// Fonction pour afficher le texte de l'input
function myDisplayText() {
    textDisplayer.textContent = inputText.value;
}

// Fonction pour mettre le texte en gras
function myTurnBold() {
    textDisplayer.style.fontWeight = "bold";
}

// Fonction pour mettre le texte en italique
function myTurnItalic() {
    textDisplayer.style.fontStyle = "italic";
}

// Fonction pour effacer les effets appliqués au texte
function myClearText() {
    textDisplayer.textContent = ""; // Effacer le texte
    textDisplayer.style.fontWeight = "normal"; // Retirer le gras
    textDisplayer.style.fontStyle = "normal"; // Retirer l'italique
}

// Ajouter des écouteurs d'événements aux éléments HTML
inputText.addEventListener("input", myDisplayText);
turnTextBoldBtn.addEventListener("click", myTurnBold);
turnTextItalicBtn.addEventListener("click", myTurnItalic);
clearTextBtn.addEventListener("click", myClearText);
