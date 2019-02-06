<pre><?php

if( count($_POST) ) {

  $to = "aweidele@gmail.com";
  
  $from = "From: ".$_POST['contact_name']." <".$_POST['contact_email'].">\r\n";

  
  $subject = $_POST['contact_subject'];
  $message = "Message received from AaronWeidele.com\n";
  $message .= "FROM: ".$_POST['contact_name']. "(".$_POST['contact_email'].")\n\n";
  $message .= $_POST['contact_message'] . "\r\n\r\n";

  echo $message;
  echo $from;
  
  $g = mail($to,$subject,$message,$from);
  echo "<br /><br />".$g;

} else {
echo "nothing submitted";
}

?></pre>