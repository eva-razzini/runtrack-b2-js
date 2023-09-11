// Fonction myCountChar pour compter le nombre d'occurrences d'un caractère dans une chaîne
function myCountChar(haystack, needle) {
    // Initialiser un compteur
    let count = 0;

    // Parcourir la chaîne de caractères
    for (let i = 0; i < haystack.length; i++) {
        // Vérifier si le caractère actuel est égal au caractère à trouver
        if (haystack[i] === needle) {
            // Incrémenter le compteur
            count++;
        }
    }

    // Retourner le nombre d'occurrences
    return count;
}

// Exemple d'utilisation de la fonction
const haystack = "Hello, world!";
const needle = "o";
const result = myCountChar(haystack, needle);

// Afficher le résultat dans la balise p avec l'id "result"
const resultElement = document.getElementById("result");
resultElement.textContent = `Nombre d'occurrences de "${needle}" dans la chaîne : ${result}`;
