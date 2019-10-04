(function($) {
  $(document).ready(function() {
    owlOn = false;
    owlOn = windowResize(owlOn);
    $(window).on('resize',function() {
      owlOn = windowResize(owlOn);
    });

    windowScroll();
    $(window).on('scroll', function() {
      windowScroll();
    });

    var menuOpen = false;
    $('.header_inner button').on('click',function() {
      if(menuOpen) {
        $('body').removeClass('menu_open').addClass('menu_closed');
        menuOpen = false;
      } else {
        $('body').removeClass('menu_closed').addClass('menu_open');
        menuOpen = true;
      }
    });

    $('body > header a').on('click',function(e) {
      var h = $(this).attr('href');
      if (h.charAt(0) == "#") {
        e.preventDefault();
        $('body').removeClass('menu_open').addClass('menu_closed');
        var target = $(h).offset().top - $('body > header').height();
        $('html, body').animate({
          scrollTop: target
        },1000);
      }
    });

  });
})(jQuery);

function windowResize(owlOn) {
  var w = $(window).width();
  //$('#feedback').text(w);
  if(w < 768 && !owlOn) {
    $('.owl-carousel').owlCarousel({
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        }
      }
    });
    owlOn = true;
  } else if(w >= 768 && owlOn) {
    $('.owl-carousel').owlCarousel('destroy');
    owlOn = false;
  }

  return owlOn;
}

function windowScroll() {
  s = $(window).scrollTop();
  if(s > 60) {
    $('body').addClass('scrolled');
  } else {
    $('body').removeClass('scrolled');
  }
}
