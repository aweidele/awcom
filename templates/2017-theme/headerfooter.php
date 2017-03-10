<!doctype html>
<html>

<head>
  <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
  <meta charset="utf-8">
  <title><?php echo $page_title; ?></title>
  <link rel="stylesheet" type="text/css" href="<?php echo $root_url.'templates/'.$theme.'/main.css'; ?>">
</head>

<body>

  <header>
    <div class="content-fluid">
        <a href="<?php echo $root_url; ?>">
       <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 47">
        <defs>
          <style>
            .cls-1 {
              fill: #393939;
            }
            
            .cls-2 {
              fill: #fff;
            }
          </style>
        </defs>
        <title>logo</title>
        <g id="Logo">
          <polygon class="cls-1" points="16.36 42.9 4.77 23.4 16.36 3.9 39.56 3.9 51.15 23.4 39.56 42.9 16.36 42.9"/>
          <polygon class="cls-2" points="35.37 22.81 28.07 10.68 20.87 22.79 20.01 22.27 28.07 8.73 36.22 22.29 35.37 22.81"/>
          <polygon class="cls-2" points="25.6 36.68 17.54 23.14 18.4 22.63 25.61 34.73 32.9 22.61 33.76 23.13 25.6 36.68"/>
          <polygon class="cls-2" points="31.36 36.68 23.3 23.14 24.16 22.63 31.36 34.73 38.66 22.61 39.51 23.13 31.36 36.68"/>
          <rect class="cls-2" x="23.24" y="16.9" width="9.46" height="1"/>
          <path class="cls-1" d="M40.58,2,53.33,23.5,40.58,45H15.08L2.33,23.5,15.08,2h25.5m1.14-2H13.94L0,23.5,13.94,47H41.71L55.65,23.5,41.71,0Z"/>
        </g>
      </svg>
          <h1><?php echo $page_title; ?></h1>
      </a>
      <nav>
        <ul>
          <?php foreach($nav as $key => $navName) { ?>
          <li>
            <a href="<?php echo $root_url . $key != $default ? "?p=$key" : ""; ?>">
              <?php echo $navName; ?>
            </a>
          </li>
          <?php } ?>
        </ul>
      </nav>
      <button><span>Menu</span><i class="icon-bars"></i></button>
    </div>
  </header>
  <main>

  </main>
  <footer>
    <div class="content-fluid">
      <div class="col-3">
        <h2>Connect</h2>
        <ul class="social">
          <li><a href="">LinkedIn</a></li>
          <li><a href="">YouTube</a></li>
          <li><a href="">Vimeo</a></li>
        </ul>
      </div>
      <div class="col-3">
        <h2>Contact</h2>
        <ul>
          <li><a href="mailto:aweidele@gmail.com">aweidele@gmail.com</a></li>
        </ul>
      </div>
    </div>
  </footer>
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
</body>

</html>