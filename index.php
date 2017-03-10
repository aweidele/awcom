<?php
  require_once('content/content.php');
  require_once('content/settings.php');
  if(isset($_GET['p']) && $_GET['p'] != '') {
    $p = $_GET['p'];
  } else {
    foreach($content as $k => $c) {
      $p = $k;
      break;
    }
  }
  require_once(getcwd().'/templates/'.$theme.'/headerfooter.php');
?>