<?php
  require_once('content/content.php');
  if(!require_once('content/settings.local.php')) {
    echo "meh";
    require_once('content/settings.php');
  }
  if(isset($_GET['p']) && $_GET['p'] != '') {
    $p = $_GET['p'];
  } else {
    foreach($content as $k => $c) {
      $p = $k;
      break;
    }
  }

  if(!isset($content[$p]) || !file_exists($root_uri.'/content/'.$content[$p])) {
    $p = '404';
  }

  require_once($root_uri.'templates/'.$theme.'/headerfooter.php');
?>
