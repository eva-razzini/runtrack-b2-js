// Fonction mySquareArray pour retourner un tableau de carrés des nombres
function mySquareArray(array) {
    // Utilisez la méthode map() pour calculer le carré de chaque nombre
    const squaredArray = array.map(number => number * number);
    return squaredArray;
}

// Exemple d'utilisation de la fonction
const numbers = [1, 2, 3, 4, 5];
const result = mySquareArray(numbers);

// Afficher le résultat dans la balise p avec l'id "result"
const resultElement = document.getElementById("result");
resultElement.textContent = `Tableau des carrés : ${result.join(", ")}`;
