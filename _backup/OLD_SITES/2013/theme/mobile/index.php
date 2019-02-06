<?php
if (isset($_GET["page"]) && $_GET["page"] != "") {
  $page = $_GET["page"];
} else {
  $page = $array_nav[0];
}
?><!DOCTYPE html>
<html lang="en-US">
<head>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
<meta charset="UTF-8" />
<title><?php echo $site_title; ?></title>

<!-- STYLESHEETS -->
<link rel="stylesheet" type="text/css" href="<?php echo $theme_url; ?>style.css" />

<!-- SCRIPT -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo $theme_url; ?>script.js"></script>

</head>
<body>
<?php include_once ( $root_uri."inc/tracking.php" ); 
?>
<div id="wrapper_header">
  <div id="container_header">
    <h1><a href="<?php echo $root_url; ?>"><?php echo $site_header; ?></a></h1>
    <nav>
      <ul>

<?php foreach($array_nav as $key => $nav) { 
  if($array_content[$nav]["type"] == "link") {
?>
        <li><a href="<?php echo $array_content[$nav]["content"]; ?>" target="aaron" class="link"><?php echo $array_content[$nav]["label"]; ?></a></li>
<?php } else { ?>
        <li<?php if ($nav == $page) { echo ' class="active"'; } ?>><a href="<?php echo $root_url.'?page='.$nav; ?>"><?php echo $array_content[$nav]["label"]; ?></a></li>
<?php }
}
?>

      </ul>
    </nav>
  </div><!-- container_header -->
</div><!-- wrapper_header -->

<div id="wrapper_content">
  <div id="container_content">
    <h2><?php echo $array_content[$page]["title"]; ?></h2>
<?php include($root_uri."content/".$array_content[$page]["content"]); ?>

  </div><!-- container_content -->
</div><!-- wrapper_content -->

<div id="wrapper_footer">
  <div id="container_footer">
    <a href="#wrapper_header">Back to top</a>
  </div><!-- container_footer -->
</div><!-- wrapper_footer -->
</body>
</html>