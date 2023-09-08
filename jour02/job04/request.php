<?php
// Fonction pour insérer un étudiant en base de données
function my_insert_student($data) {
    // Connexion à la base de données
    $servername = "localhost";
    $username = "pma";
    $password = "plomkiplomki";
    $dbname = "lp_official";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Vérification de la connexion
    if ($conn->connect_error) {
        die("La connexion à la base de données a échoué : " . $conn->connect_error);
    }

    // Préparation de la requête SQL
    $sql = "INSERT INTO student (email, fullname, gender, grade_id, birthdate)
            VALUES (?, ?, ?, ?, ?)";

    // Préparation de la déclaration SQL
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Liaison des paramètres
        $stmt->bind_param("sssss", $data['student-mail'], $data['student-fullname'], $data['student-gender'], $data['student-grade'], $data['student-birthdate']);

        // Exécution de la requête
        if ($stmt->execute()) {
            $stmt->close();
            $conn->close();
            return true; // Succès
        } else {
            $stmt->close();
            $conn->close();
            return false; // Échec
        }
    } else {
        $conn->close();
        return false; // Échec
    }
}

// Vérification si les données sont soumises
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $studentData = array(
        'student-mail' => $_POST['student-mail'],
        'student-fullname' => $_POST['student-fullname'],
        'student-gender' => $_POST['student-gender'],
        'student-grade' => $_POST['student-grade'],
        'student-birthdate' => $_POST['student-birthdate']
    );

    // Appel de la fonction pour insérer l'étudiant en base de données
    if (my_insert_student($studentData)) {
        http_response_code(200); // Succès
    } else {
        http_response_code(500); // Erreur du serveur
    }
} else {
    http_response_code(400); // Mauvaise requête
}
?>
