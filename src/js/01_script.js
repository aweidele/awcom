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
