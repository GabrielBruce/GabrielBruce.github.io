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

$my_email = 'JGabrielBruce@jgabrielbruce.com';

$email_subject = "Form submission from $first_name $last_name";
$email_body = "You have received a new message from:\n\n".
    "First Name: $first_name\n".
    "Last Name: $last_name\n\n".
    "Here is the message:\n\n".
    "$subject\n\n".
    $message;

$reply_email_subject = "Contact form submission to J. Gabriel Bruce";
$reply_email_body = "Thank you $first_name $last_name for contacting J. Gabriel Bruce.\n\n".
    "I will reach out to you shortly.\n".
    "Any additional information can be sent to $my_email.\n\n".
    "This is the message that was sent:\n\n".
    "$subject\n\n".
    $message;
    
$headers = "From: $my_email \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
mail($my_email, $email_subject, $email_body, $headers);

$headers = "From: $my_email \r\n";
$headers .= "Reply-To: $my_email \r\n";
mail($visitor_email, $reply_email_subject, $reply_email_body, $headers);

echo "Your message has been sent. Thank you.\r\n \r\nA confirmation e-mail has been sent to $visitor_email.";

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