// Fonction myIsInString pour vérifier si une chaîne se trouve dans une autre
function myIsInString(hayrstack, needle) {
    // Utilisez la méthode includes() pour vérifier si needle est dans hayrstack
    return hayrstack.includes(needle);
}

// Exemple d'utilisation de la fonction
const hayrstack = "Hello World";
const needle = "llo";
const result = myIsInString(hayrstack, needle);

// Afficher le résultat dans la balise p avec l'id "result"
const resultElement = document.getElementById("result");
resultElement.textContent = `La chaîne "${needle}" ${result ? 'est' : 'n\'est pas'} dans la chaîne principale.`;
