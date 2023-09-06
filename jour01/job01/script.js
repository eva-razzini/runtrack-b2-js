// Fonction myUpperCase pour convertir une chaîne en majuscules
function myUpperCase(string) {
    // Utilisez la méthode toUpperCase() pour la conversion
    return string.toUpperCase();
}

// Exemple d'utilisation de la fonction
const string = "Hello World";
const result = myUpperCase(string);

// Afficher le résultat dans la balise p avec l'id "result"
const resultElement = document.getElementById("result");
resultElement.textContent = `Chaîne en majuscules : ${result}`;
