<section id="<?php echo $a; ?>">
  <div class="content-fluid">
    <div class="col-4 offset-1">
      <h2>Front-End Web Development</h2>
      <h3>Related Skills:</h3>
      <ul class="skills">
        <li>Adobe Creative Suite (Photoshop, Illustrator, InDesign)</li>
        <li>HTML 5</li>
        <li>CSS 3/SASS/LESS</li>
        <li>PHP</li>
        <li>Javascript/JQuery</li>
        <li>Sitecore</li>
        <li>Wordpress</li>
        <li>Git</li>
        <li>SourceTree</li>
        <li>Jira</li>
        <li>Shopify</li>
        <li>MailChimp/MailChimp API</li>
        <li>MySQL</li>
        <li>PayPal/Payflow</li>
        <li>Web Prototyping tools (Axure, Balsamic, HotGloo)</li>
        <li>UX Design</li>
        <li>Usability Testing</li>
      </ul>
    </div>
    <div class="col-5 offset-1">
      <div class="web-preview">
        <img src="<?php echo $root_url.'templates/'.$theme.'/images/ipad.svg'; ?>">
        <div>
          <ul>
            <li><img src="<?php echo $root_url.'templates/'.$theme.'/images/preview-bt.jpg'; ?>"></li>
            <!-- li><img src="<?php echo $root_url.'templates/'.$theme.'/images/preview-bt.jpg'; ?>"></li>
            <li><img src="<?php echo $root_url.'templates/'.$theme.'/images/preview-bt.jpg'; ?>"></li -->
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="content-fluid portfolio-grid">
<?php foreach($clients[$a] as $key => $p) { ?>
     <article class="col-4 col-lg-3" id="portfolio-<?php echo $a.'-'.$key; ?>"><a href="<?php echo $p['url']; ?>" target="_blank">
      <img src="<?php echo $root_url; ?>/content/screencaps/<?php echo $p['image']; ?>">
      <div>
        <div>
          <h3><?php echo $p['name']; ?></h3>
          <p><?php echo $p['description']; ?></p>
          <div class="btn">Launch Site</div>
        </div>
      </div>
    </a></article>
<?php } ?>
  </div>
</section>