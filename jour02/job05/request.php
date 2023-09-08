<?php
// Fonction pour rechercher un étudiant par email
function my_search_student($email) {
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
    $sql = "SELECT student.id, student.email, student.fullname, student.gender, student.birthdate, grade.name AS grade
            FROM student
            LEFT JOIN grade ON student.grade_id = grade.id
            WHERE student.email = ?";

    // Préparation de la déclaration SQL
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Liaison des paramètres
        $stmt->bind_param("s", $email);

        // Exécution de la requête
        $stmt->execute();

        // Liaison des résultats à des variables
        $stmt->bind_result($id, $email, $fullname, $gender, $birthdate, $grade);

        $studentData = array();

        // Récupération des résultats
        while ($stmt->fetch()) {
            $student = array(
                "id" => $id,
                "email" => $email,
                "fullname" => $fullname,
                "gender" => $gender,
                "birthdate" => $birthdate,
                "grade_id" => $grade
            );
            $studentData[] = $student;
        }

        $stmt->close();
        $conn->close();

        return $studentData;
    } else {
        $conn->close();
        return false; // Échec
    }
}

// Vérification si les données sont soumises via GET
if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["email"])) {
    $email = $_GET["email"];
    $studentData = my_search_student($email);

    if ($studentData) {
        echo json_encode($studentData);
    } else {
        http_response_code(500); // Erreur du serveur
    }
} else {
    http_response_code(400); // Mauvaise requête
}
?>
