(function($) {
  $(document).ready(function() {
    owlOn = false;
    owlOn = windowResize(owlOn);
    $(window).on('resize',function() {
      owlOn = windowResize(owlOn);
    });
  });
})(jQuery);

function windowResize(owlOn) {
  var w = $(window).width();
  //$('#feedback').text(w);
  if(w < 768 && !owlOn) {
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true
    });
    owlOn = true;
  } else if(w >= 768 && owlOn) {
    $('.owl-carousel').owlCarousel('destroy');
    owlOn = false;
  }

  return owlOn;
}
