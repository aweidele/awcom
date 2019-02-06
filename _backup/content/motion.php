<section id="<?php echo $a; ?>">
  <div class="content-fluid">
    <div class="col-5 offset-1">
      <div class="motion-preview">
        <img src="<?php echo $root_url.'templates/'.$theme.'/images/tv.svg'; ?>">
        <video loop autoplay>
          <source src='<?php echo $root_url.'templates/'.$theme.'/images/reel.mp4'; ?>' type='video/mp4; codecs="video/mp4"'>
          <source src='<?php echo $root_url.'templates/'.$theme.'/images/reel.webm'; ?>' type='video/webm'>
        </video>
        <img class="mobile-gif" src='<?php echo $root_url.'templates/'.$theme.'/images/reel.gif'; ?>'>
      </div>
    </div>
    <div class="col-4 offset-1">
      <h2>Motion</h2>
      <h3>Related Skills:</h3>
      <ul class="skills">
        <li>Adobe Premiere</li>
        <li>Adobe After Effects</li>
        <li>Adobe Edge</li>
        <li>Adobe Flash</li>
      </ul>
    </div>
  </div>
  <div class="content-fluid portfolio-grid">
<?php foreach($clients[$a] as $key => $p) { ?>
     <article class="col-4" id="portfolio-<?php echo $a.'-'.$key; ?>"><a href="<?php echo $p['url']; ?>" target="_blank">
      <img src="<?php echo $root_url; ?>/content/screencaps/<?php echo $p['image']; ?>">
      <div>
        <div>
          <h3><?php echo $p['name']; ?></h3>
          <p><?php echo $p['description']; ?></p>
          <div class="btn">Learn More</div>
        </div>
      </div>
    </a></article>
<?php } ?>
  </div>
</section>