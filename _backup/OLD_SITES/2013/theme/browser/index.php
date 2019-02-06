<!DOCTYPE html>
<html lang="en-US">
<head>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
<meta charset="UTF-8" />
<title><?php echo $site_title; ?></title>

<!-- STYLESHEETS -->
<link rel="stylesheet" type="text/css" href="<?php echo $theme_url; ?>inc/style.css" />
<link rel="stylesheet" type="text/css" href="<?php echo $theme_url; ?>inc/shadowbox/shadowbox.css">

<!-- SCRIPTS -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo $theme_url; ?>inc/script.js"></script>
<script type="text/javascript">
aaron_go();
</script>

<!-- SHADOWBOX -->
<script type="text/javascript" src="<?php echo $theme_url; ?>inc/shadowbox/shadowbox.js"></script>
<script type="text/javascript">
Shadowbox.init();
</script>


</head>
<body>
<?php include_once ( $root_uri."inc/tracking.php" ); 
?>

<div id="feedback">Feedback</div>

<div id="wrapper_header">
  <div id="container_header">
    <h1><a href="#wrapper_content"><?php echo $site_header; ?></a></h1>
    <nav>
      <ul>

<?php foreach($array_nav as $nav) { 
  if($array_content[$nav]["type"] == "link") {
?>
        <li><a href="<?php echo $array_content[$nav]["content"]; ?>" target="aaron" class="link"><?php echo $array_content[$nav]["label"]; ?></a></li>
<?php } else { ?>
        <li><a href="#<?php echo $nav; ?>"><?php echo $array_content[$nav]["label"]; ?></a></li>
<?php }
}
?>

      </ul>
    </nav>
    <div class="clear"></div>
  </div><!-- container_header -->
</div><!-- wrapper_header -->

<div id="wrapper_content">
  <div id="container_content">

    <div class="content_block" id="homepage">
      <div class="home_content">
        <h2>hello, I'm <br /><span class="aaron">Aaron</span></h2>
        <p class="hometext-left">I'm a web designer</p>
        <p class="hometext-right">And an animator</p>
        <p class="scroll-down">Scroll down to learn more!</p>
      </div>
    </div>

    
<?php foreach($array_nav as $nav) { 
  if($array_content[$nav]["type"] != "link") {
?>
    <div class="content_block <?php echo $array_content[$nav]["type"]; ?>" id="<?php echo $nav; ?>">
      <div class="page_content">
        <h2><?php echo $array_content[$nav]["title"]; ?></h2>
<?php if ($array_content[$nav]["type"] == "portfolio") { ?>
        <div class="portfolio_container">
          <div class="portfolio_slider_container">
            <div class="portfolio_slider">

<?php include($root_uri."content/".$array_content[$nav]["content"]); ?>
<div class="clear"></div>

            </div><!-- portfolio_slider -->
          </div><!-- portfolio_slider_container -->
        </div><!-- portfolio_container -->
<?php } else { ?>

<?php include($root_uri."content/".$array_content[$nav]["content"]); ?>

<?php } ?>


      </div><!-- page_content -->
<!--
<?php if ($array_content[$nav]["type"] != "content_full") { ?>
      <div class="container_page_illustration">
        <div class="page_illustration">
          <div class="illustration1"><img src="<?php echo $theme_url; ?>image/illustration-<?php echo $nav; ?>1.png" /></div>
          <div class="illustration2"><img src="<?php echo $theme_url; ?>image/illustration-<?php echo $nav; ?>2.png" /></div>
        </div>
      </div>
<?php } ?>
-->      
      <div class="clear"></div>
    </div>
<?php 
  }
} ?>
  </div><!-- container_content --></div>
</div><!-- wrapper_content -->

<div id="wrapper_footer">
  <div id="container_footer">
    footer.
  </div><!-- container_footer --></div>
</div><!-- wrapper_footer -->

</body>
</html>