// Fonction myArraySum pour faire la somme des éléments d'un tableau
function myArraySum(array) {
    // Utilisez la méthode reduce() pour faire la somme des éléments du tableau
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Exemple d'utilisation de la fonction
const numbers = [4, 24, 52, 14, 32, 56];
const result = myArraySum(numbers);

// Afficher le résultat dans la balise p avec l'id "result"
const resultElement = document.getElementById("result");
resultElement.textContent = `La somme des éléments du tableau est : ${result}`;
