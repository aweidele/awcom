<header id="<?php echo $a; ?>">
  <p>
    <span class="hello">Hello.</span>
    <span class="me">I'm Aaron.</span>
    <span class="what">I am a <strong>Web Developer</strong><br>
      and a <strong>Designer.</strong></span>
  </p>
  <p class="scrolldown"><a href="#<?php
    $current = false;
    foreach($content as $k => $c) {
      if($current) {
        $n = $k;
        break;
      }
      if($k == $a) {
        $current = true;
      }
    }
    echo $n;
    ?>"><span>Scroll Down</span><span>to Learn More</span><i class="icon-down"></i></a></p>
</header>