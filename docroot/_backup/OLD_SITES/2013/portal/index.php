<?php 
  require("inc/connections.php"); 
  require("inc/simplepie/php/autoloader.php");
  ?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Aaron's Portal</title>
<link href='http://fonts.googleapis.com/css?family=Arvo:400,700,700italic,400italic' rel='stylesheet' type='text/css'>
<style type="text/css">
  body {
    font-family: 'Arvo', serif;
  }
  
  * { margin: 0; padding: 0; outline: none; border: none; }
  a { color: #333399; }
  
  .main ul { margin-top: 1em; }
  
  .main {
    width: 500px;
    font-size: 0.9em;
    margin: auto;
  }
  
  .main li {
    margin-bottom: 1em;
    font-size: 0.9em;
  }
  
  a {
    color: #000000;
    text-decoration: none;
  }
  
  a:hover {
    color: #FF4400;
    text-decoration: underline;
  }
  
  @media screen and (max-width: 629px) {
    body { font-size: 1em; }
    
    .main {
      width: 98%;
    }
  }
</style>
</head>
<body>

<?php
$feed = new SimplePie();
$feed->set_feed_url('http://masnsports.com/school_of_roch/atom.xml');
$feed->item_limit = (int) 5;
$feed->init();
$feed->handle_content_type();
?>
<div class="main">
<h1><a href="<?php echo $feed->get_permalink(); ?>"><?php echo $feed->get_title(); ?></a></h1>
<p><strong><?php echo $feed->get_description(); ?></strong></p>
<ul>
<?php foreach ($feed->get_items() as $item): ?>
  <li><a href="<?= $item->get_permalink(); ?>"><?= $item->get_title(); ?></a></li>
<?php endforeach; ?>
</ul>
</div>
</body>
</html>