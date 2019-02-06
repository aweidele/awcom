<?php
// DEFINE SITE SETTINGS
$site_title = "Aaron Weidele / Web Designer / Animator";
$site_header = "aaronweidele<strong>design</strong>";

// DEFINE ROOT URI/URL
$root_url = "http://www.aaronweidele.com/";
$root_uri = "/home1/angrychi/public_html/aaronweidele.com/2013/";

// DEFINE THEME
$browser = "browser";
$mobile  = "mobile";
$tablet  = "browser";

// DEFINE CONTENT
$array_nav = array("web","motion","cv","contact");

$array_content = array(

  "home" => array(
    "label"   => "Home",
    "content" => "home.php",
    "type"    => "home"
  ),
  
  "web" => array(
    "label"   => "Web Design",
    "title"   => "Web Design",
    "content" => "web.php",
    "type"    => "portfolio"
  ),
  
  "wordpress" => array(
    "label"   => "Wordpress",
    "title"   => "Wordpress Development",
    "content" => "wordpress.php",
    "type"    => "portfolio"
  ),
  
  "motion" => array(
    "label"   => "Motion",
    "title"   => "Motion",
    "content" => "motion.php",
    "type"    => "portfolio"
  ),
  
  "cv" => array(
    "label"   => "Resumé",
    "title"   => "Resumé",
    "content" => "cv.php",
    "type"    => "content_full"
  ),
  
  "contact" => array(
    "label"   => "Contact",
    "title"   => "Contact",
    "content" => "contact.php",
    "type"    => "content_regular"
  ),
  
  "linkedin" => array(
    "label"   => "LinkedIn",
    "title"   => "LinkedIn",
    "content" => "http://www.linkedin.com/pub/aaron-weidele/3a/231/5a4",
    "type"    => "link"
  ),
  
  "blog" => array(
    "label"   => "Blog",
    "title"   => "Blog",
    "content" => "http://www.angrychickens.com",
    "type"    => "link"
  ),

); /* $content_nav */

// LOAD THEME
include ( $root_uri."inc/Mobile_Detect.php" );
$detect = new Mobile_Detect();

if ($detect->isMobile()) {
  $theme_uri = $root_uri."theme/".$mobile."/";
  $theme_url = $root_url."theme/".$mobile."/";
} 

else if($detect->isTablet()) {
  $theme_uri = $root_uri."theme/".$tablet."/";
  $theme_url = $root_url."theme/".$tablet."/";
} 

else {
  $theme_uri = $root_uri."theme/".$browser."/";
  $theme_url = $root_url."theme/".$browser."/";
}

require ($theme_uri."index.php");
?>