// Fonction pour envoyer les données du formulaire à request.php
function mySearchStudent(form) {
    var email = document.getElementById("email-search-student").value;

    fetch("request.php?email=" + email, {
        method: "GET"
    })
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Erreur lors de la recherche de l'étudiant.");
        }
    })
    .then(function(studentData) {
        displayStudentInfo(studentData);
    })
    .catch(function(error) {
        console.error("Erreur : " + error);
    });
}

// Fonction pour afficher les informations de l'étudiant
function displayStudentInfo(studentData) {
    var studentInfoDiv = document.getElementById("student-info");
    studentInfoDiv.innerHTML = "";

    if (studentData.length > 0) {
        var table = document.createElement("table");
        table.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Nom Complet</th>
                <th>Genre</th>
                <th>Date de Naissance</th>
                <th>Promotion</th>
            </tr>
        `;

        for (var i = 0; i < studentData.length; i++) {
            var student = studentData[i];
            var row = table.insertRow();
            row.innerHTML = `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.email}</td>
                    <td>${student.fullname}</td>
                    <td>${student.gender}</td>
                    <td>${student.birthdate}</td>
                    <td>${student.grade_id}</td>
                </tr>
            `;
        }

        studentInfoDiv.appendChild(table);
    } else {
        studentInfoDiv.textContent = "Aucun étudiant trouvé avec cet email.";
    }
}

// Écouter la soumission du formulaire
var formSearchStudent = document.getElementById("form-search-student");
formSearchStudent.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher la soumission normale du formulaire
    mySearchStudent(formSearchStudent); // Appeler la fonction de recherche
});
