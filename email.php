<?php

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if(empty($first_name)||empty($last_name)||empty($visitor_email)) 
{
    echo "Name and email are required";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value";
    exit;
}

$email_from = 'JGabrielBruce@jgabrielbruce.com';
$email_subject = "Form submission from $first_name $last_name";
$email_body = "You have received a new message from:\n\n".
    "First Name: $first_name\n".
    "Last Name: $last_name\n\n".
    "Here is the message:\n\n".
    "$subject\n\n".
    $message;
    
$to = "JGabrielBruce@jgabrielbruce.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);
echo "Thank you. Your message has been sent.";


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 