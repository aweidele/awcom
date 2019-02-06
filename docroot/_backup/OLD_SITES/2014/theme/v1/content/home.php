    <div id="intro">
      <p class="hello seven-col">Hello.</p>
      <p class="me seven-col">I'm Aaron.</p>
      <p class="what seven-col">I am a <strong>Web Designer</strong><br/>and an <strong>animator.</strong></p>
      <p class="scroll seven-col"><a href="#web_design"><span class="scroll_left"><span>Scroll down</span></span> <span class="scroll_right"><span>to learn more</span></span></a></p>
      <hr /> 
    </div>
 
    <div id="web_design" class="content_section">
      <div class="content_section_container ten-col">
        <div class="content_section_left four-col cv">
          <h2>Web Design</h2>
          <h3>Related Skills:</h3>
          <p>Adobe Creative Suite (Photoshop, Illustrator, InDesign, Flash), Web Prototyping tools (Axure, Balsamic, HotGloo), UX Design, Usability Testing</p>
          <p class="view_full three-col"><a href="<?php echo $root_url; ?>?p=portfolio&cat=web_design">View Web Design Portfolio</a></p>
        </div>
        <div class="content_section_right five-col"><a href="<?php echo $root_url; ?>?p=portfolio&cat=web_design"><img src="<?php echo $theme_root; ?>image/homepage_barnard.jpg" /></a></div>
        <div class="clear"></div>
      </div>
      <hr />
    </div>

 
    <div id="web_dev" class="content_section">
      <div class="content_section_container ten-col">
        <div class="content_section_right four-col cv">
          <h2>Web Development</h2>
          <h3>Related Skills:</h3>
          <p>HTML 5, CSS 3, PHP, Javascript/JQuery, Wordpress, MySQL, PayPal/Payflow</p>
          <p class="view_full three-col"><a href="<?php echo $root_url; ?>?p=portfolio&cat=web_development">View Web Development Portfolio</a></p>
        </div>
        <div class="content_section_left five-col"><a href="<?php echo $root_url; ?>?p=portfolio&cat=web_development"><img src="<?php echo $theme_root; ?>image/homepage_ma.jpg" /></a></div>
        <div class="clear"></div>
      </div>
      <hr />
    </div>
 
    <div id="motion" class="content_section">
      <div class="content_section_container ten-col">
        <div class="content_section_left four-col cv">
          <h2>Motion</h2>
          <h3>Related Skills:</h3>
          <p>Adobe Premiere, Adobe After Effects, Adobe Edge, Adobe Flash</p>
          <p class="view_full three-col"><a href="<?php echo $root_url; ?>?p=portfolio&cat=motion">View Motion Portfolio</a></p>
        </div>
        <div class="content_section_right five-col">
          <div class="video">
<?php if ($m != 'tablet' && $m != 'phone') { ?>
            <div class="tv_overlay"><a href="<?php echo $root_url; ?>?p=portfolio&cat=motion"><img src="<?php echo $theme_root; ?>image/tv.png" /></a></div>
            <div class="video_content">
              <video loop autoplay>
              <source src='<?php echo $theme_root; ?>image/reel.mp4' type='video/mp4; codecs="video/mp4"'>
              <source src='<?php echo $theme_root; ?>image/reel.webm' type='video/webm'>
              </video>
            </div>
<?php } else { ?>
            <div class="tv_overlay"><a href="<?php echo $root_url; ?>?p=portfolio&cat=motion"><img src="<?php echo $theme_root; ?>image/tv_static.png" /></a></div>
<?php } ?>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <hr />
    </div>

 
    <div id="work_exp" class="content_section">
      <div class="content_section_container ten-col">
        <h2>Experience and Education</h2>
        <div id="timeline">
          <h3 class="education">Education</h3>
          <div class="umbc ed">
            <p class="date">1995-2000</p>
            <p>University of Maryland Baltimore County, B.A. Imaging/Digital Art</p>
          </div>
          
          <h3>Work Experience</h3>
          <div class="w_umbc work">
            <p class="date">1999-2010</p>
            <p>New Media Specialist, UMBC New Media Studio</p>
          </div>
          <div class="ncsdo work">
            <p class="date">2010-Present</p>
            <p>Web/Interactive Designer, North Charles Street Design Organization</p>
          </div>
          
          <ul class="timline_labels">
            <li class="y1995">1995</li>
            <li class="y2000">2000</li>
            <li class="y2005">2005</li>
            <li class="y2010">2010</li>
            <li class="y2014">2014</li>
          </ul>
        </div><!-- #timeline -->
        
        <p class="cv_download"><a href="/docs/Aaron-Weidele-Resume.pdf">Download CV in PDF format</a></p>
        
      </div>
      <hr />
    </div>