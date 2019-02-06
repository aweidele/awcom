<?php
if(isset($_GET['cat']) && $_GET['cat'] != "") {
  $cat = $_GET['cat'];
} else {
  $cat = 0;
}

require($theme_root_uri."content/portfolio_array.php");
?>
<script type="text/javascript">portfolioGo('<?php echo $cat; ?>');</script>
<div id="portfolio" class="content_section">
  <div class="content_section_container full-width">
    <h2>Portfolio</h2>
    <p class="filterby">Filter by:</p>
    <ul class="filters six-col">
      <li id="f_web_design" class="two-col<?php if ($cat && $cat != "web_design") { echo ' off'; } ?>"><a href="<?php echo $root_url; ?>?p=portfolio&cat=web_design">Web Design</a></li>
      <li id="f_web_development" class="two-col<?php if ($cat && $cat != "web_development") { echo ' off'; } ?>"><a href="<?php echo $root_url; ?>?p=portfolio&cat=web_development">Web Development</a></li>
      <li id="f_motion" class="two-col<?php if ($cat && $cat != "motion") { echo ' off'; } ?>"><a href="<?php echo $root_url; ?>?p=portfolio&cat=motion">Motion</a></li>
    </ul>
    <div class="clear"></div>
    
    <div class="portfolio_grid nine-col">
<?php foreach($portfolio_array as $name => $port) { ?>

      <div class="portfolio_item three-col <?php echo $port['class']; ?>">
        <a href="<?php echo $port['url']; ?>" target="_blank">
          <img src="<?php echo $theme_root.'content/portfolio_image/'.$port['img']; ?>" />
          <div class="description">
            <h3><?php echo $name; ?></h3>
            <p><?php echo $port['desc']; ?></p>
<?php if(strpos($port['class'],"motion") !== false) { ?>
            <p class="launch">Watch Video</p>
<?php } else { ?>
            <p class="launch">Launch Site</p>
<?php } ?>
          </div>
        </a>
      </div>

<?php } ?>
      <div class="clear"></div>
    </div>
  </div><!-- .content_section_container -->
  <hr />
</div><!-- .content_section -->