// Fonction pour envoyer les données du formulaire à request.php
function myRegisterStudent(form) {
    var formData = new FormData(form);

    fetch("request.php", {
        method: "POST",
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            alert("Étudiant inscrit avec succès !");
        } else {
            alert("Erreur lors de l'inscription de l'étudiant.");
        }
    })
    .catch(function(error) {
        console.error("Erreur : " + error);
    });
}

// Écouter la soumission du formulaire
var formAddStudent = document.getElementById("form-add-student");
formAddStudent.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher la soumission normale du formulaire
    myRegisterStudent(formAddStudent); // Appeler la fonction d'inscription
});
