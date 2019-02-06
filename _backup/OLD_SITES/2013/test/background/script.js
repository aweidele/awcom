$(document).ready(function() {
  slide_size();
  $(window).resize(function() { slide_size(); });
});

function slide_size() {
  $(".slide").height( $(window).height() );
  $(".slide").each(function() {
    $c = Math.round(( $(".content",this).height() + parseInt($(".content",this).css("padding-top")) + parseInt($(".content",this).css("padding-bottom")) ) / 2);
    $w = Math.round( $(window).height() / 2 );
    $m = $w - $c;
    
    $(".content",this).css({ "padding-top":$m });
  });
}