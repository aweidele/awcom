<?php
include($root_uri.'inc/mobile_detect/Mobile_Detect.php');
$detect = new Mobile_Detect;
$m = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'desktop');
?>
<!DOCTYPE html>
<html lang="en-US">
<head>
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
<meta charset="UTF-8" />
<title><?php echo $site_title; ?></title>

<link rel="SHORTCUT ICON" HREF="/favicon.ico">

<!-- link href='http://fonts.googleapis.com/css?family=Open+Sans:300,700,800,300italic,700italic,800italic' rel='stylesheet' type='text/css' -->
<link rel="stylesheet" type="text/css" media="screen and (min-width: 761px)" href="<?php echo $theme_root; ?>style.css" />
<link rel="stylesheet" type="text/css" media="screen and (max-width: 761px)" href="<?php echo $theme_root; ?>mobile.css" />

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo $theme_root; ?>script.js"></script>

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-37250293-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</head>
<body>
<div id="wrapper_header">
  <div id="container_header" class="full-width">
    <h1 class="five-col mobile-half"><a href="<?php echo $root_url; ?>">Aaron Weidele</a></h1>
    <div id="nav" class="seven-col mobile-half">
      <ul>
        <li><a href="<?php echo $root_url; ?>">Home</a></li>
        <li><a href="<?php echo $root_url; ?>?p=portfolio">Portfolio</a></li>
        <!-- li><a href="<?php echo $root_url; ?>?p=contact">Contact</a></li>
        <li><a href="http://blog.aaronweidele.com">Blog</a></li -->
      </ul>
    </div>
    <div class="clear"></div>
  </div><!-- #container_header -->
</div><!-- #wrapper_header -->


<div id="wrapper_content">
  <div id="container_content">
    
<?php if(isset($_GET['p']) && $_GET['p'] != "") {
  $p = $theme_root_uri."content/".$_GET['p'].".php";
} else {
  $p = $theme_root_uri."content/home.php";
}
include($p);
?>
    
  </div><!-- #container_content -->
</div><!-- #wrapper_content -->


<div id="wrapper_footer">
  <div id="container_footer" class="eight-col">
    
    <div class="footer_left three-col">
      <h2>Connect</h2>
      <ul class="social">
        <li class="linkedin"><a href="">LinkedIn</a></li>
        <li class="youtube"><a href="">YouTube</a></li>
        <li class="vimeo"><a href="">Vimeo</a></li>
      </ul>
      <div class="clear"></div>
    </div>
    
    <div class="footer_right five-col">
      <h2>Contact</h2>
      <form action="<?php echo $theme_root; ?>content/form_process.php" method="POST">
      <p><input type="text" name="contact_name" id="contact_name" placeholder="Your Name" /></p>
      <p><input type="email" name="contact_email" id="contact_email" placeholder="Your Email" /></p>
      <p><input type="text" name="contact_subject" id="contact_subject" placeholder="Subject" /></p>
      <p class="form_message four-col"><textarea name="contact_message" id="contact_message" placeholder="Your Message"></textarea></p>
      <p class="form_submit one-col"><input type="submit" name="submit" value="Send" /></p>
      </form>
      <p class="mobile_email">Email: <span class="email"></span></p>
      <script type="text/javascript">addEmail("aweidele","gmail",0);</script>
    </div>
    
    <div class="clear"></div>
    
  </div><!-- #container_footer -->
</div><!-- #wrapper_footer -->

<div id="feedback">...</div>
</body>
</html>