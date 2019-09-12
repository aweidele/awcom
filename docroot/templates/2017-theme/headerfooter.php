<!doctype html>
<html>

<head>
  <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
  <meta charset="utf-8">
  <title><?php echo $page_title; ?> | Web Developer, Web Designer, and Animator in Baltimore, Maryland</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="<?php echo '/templates/'.$theme.'/main.css'; ?>">
</head>

<body>

  <header>
    <div class="content-fluid">
      <a href="#<?php echo $default; ?>">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 79"><defs><style>.cls-1{fill:#393939;}.cls-2{fill:#fff;}</style></defs><title>Artboard 1</title><g id="Logo"><polygon class="cls-1 inner-hex" points="16.36 58.9 4.77 39.4 16.36 19.9 39.56 19.9 51.15 39.4 39.56 58.9 16.36 58.9"/><polygon class="cls-2" points="35.37 38.81 28.07 26.68 20.87 38.79 20.01 38.27 28.07 24.73 36.22 38.29 35.37 38.81"/><polygon class="cls-2" points="25.6 52.68 17.54 39.14 18.4 38.63 25.61 50.73 32.9 38.61 33.76 39.13 25.6 52.68"/><polygon class="cls-2" points="31.36 52.68 23.3 39.14 24.16 38.63 31.36 50.73 38.66 38.61 39.51 39.13 31.36 52.68"/><rect class="cls-2" x="23.24" y="32.9" width="9.46" height="1"/><path class="cls-1 outer-hex" d="M40.58,18,53.33,39.5,40.58,61H15.08L2.33,39.5,15.08,18h25.5m1.14-2H13.94L0,39.5,13.94,63H41.71L55.65,39.5,41.71,16Z"/></g></svg>
        <h1><?php echo $page_title; ?></h1>
      </a>
      <nav>
        <ul>
<?php foreach($nav as $key => $navName) { ?>
          <li><a href="#<?php echo $key; ?>"><?php echo $navName; ?></a></li>
<?php } ?>
        </ul>
      </nav>
      <button><span>Menu</span><i></i></button>
    </div>
  </header>
  <main>
    TEST
<?php foreach($content as $a => $page) { ?>

<?php include($root_uri.'content/'.$page); ?>

<?php } ?>
  </main>
  <footer id="contact">
    <div class="content-fluid">
      <div class="col-3 offset-3">
        <h2>Connect</h2>
        <ul class="social">
          <li><a href="https://www.linkedin.com/in/aaron-weidele-5a42313a/"><span>LinkedIn</span><i class="icon-linkedin"></i></a></li>
          <!-- li><a href=""><span>YouTube</span><i class="icon-youtube-play"></i></a></li>
          <li><a href="https://vimeo.com/user980712"><span>Vimeo</span><i class="icon-vimeo"></i></a></li -->
        </ul>
      </div>
      <div class="col-3">
        <h2>Contact</h2>
        <?php include($root_uri.'content/contact.php'); ?>
      </div>
    </div>
  </footer>
  <div id="feedback"></div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script type="text/javascript" src="<?php echo $root_url.'templates/'.$theme.'/main.js'; ?>"></script>
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
