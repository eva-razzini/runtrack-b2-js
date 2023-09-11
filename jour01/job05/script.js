// Fonction pour vérifier si un nombre est premier
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }

    return true;
}

// Fonction myPrimeList pour générer la liste des nombres premiers jusqu'à un nombre donné
function myPrimeList(limit) {
    const primes = [];

    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) {
            primes.push(number);
        }
    }

    return primes;
}

// Exemple d'utilisation de la fonction
const limit = 20; // Par exemple, générer la liste des nombres premiers jusqu'à 20
const result = myPrimeList(limit);

// Afficher le résultat dans la balise p avec l'id "result"
const resultElement = document.getElementById("result");
resultElement.textContent = `Nombres premiers jusqu'à ${limit} : ${result.join(", ")}`;
