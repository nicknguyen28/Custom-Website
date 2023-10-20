<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        
        $to = "nicknguyen3@yahoo.com";
        $subject = "Contact Form :: $name";
        $headers = "From: $email";

        mail($to, $subject, $message, $headers);
        header("Location: index.html");
        exit;
    } else {
        header("HTTP/1.0 403 Forbidden");
        echo "Access Forbidden";
    }
?>
