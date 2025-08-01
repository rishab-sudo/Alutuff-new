<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Validate method
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
    exit;
}

// Required fields
$fields = ['firstName', 'lastName', 'email', 'subject', 'message'];
foreach ($fields as $field) {
    if (empty($_POST[$field])) {
        echo json_encode(["success" => false, "message" => "Missing required field: $field"]);
        exit;
    }
}

// Sanitize input
$firstName = htmlspecialchars($_POST['firstName']);
$lastName = htmlspecialchars($_POST['lastName']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);
$requirement = htmlspecialchars($_POST['requirement'] ?? 'N/A');

// Prepare message
$to = "sales@alutuff.in";
$fullSubject = "New Contact Form Submission: $subject";
$body = "You have received a new message:\n\n";
$body .= "Name: $firstName $lastName\n";
$body .= "Email: $email\n";
$body .= "Subject: $subject\n";
$body .= "Requirement: $requirement Sq. Ft.\n";
$body .= "Message:\n$message\n";

// Headers
$headers = "From: $email\r\nReply-To: $email\r\n";

// Send email
if (mail($to, $fullSubject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Mail sending failed."]);
}
