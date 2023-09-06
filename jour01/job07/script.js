// Fonction myArraySort pour trier un tableau dans l'ordre croissant ou décroissant
function myArraySort(array, order) {
    if (order === "ASC") {
        return array.slice().sort((a, b) => a - b);
    } else if (order === "DESC") {
        return array.slice().sort((a, b) => b - a);
    } else {
        // Retourner le tableau non trié si l'ordre n'est pas valide
        return array.slice();
    }
}

// Exemple d'utilisation de la fonction
const numbers = [5, 2, 8, 1, 3];
const ascendingOrder = "ASC";
const descendingOrder = "DESC";

const resultAscending = myArraySort(numbers, ascendingOrder);
const resultDescending = myArraySort(numbers, descendingOrder);

// Afficher les résultats dans la balise p avec l'id "result"
const resultElement = document.getElementById("result");
resultElement.textContent = `Tri croissant : ${resultAscending.join(", ")}\nTri décroissant : ${resultDescending.join(", ")}`;
