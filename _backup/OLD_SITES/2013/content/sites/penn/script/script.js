$(document).ready(function() {

  $(window).scroll(function() {
    
    // Collapse form area and highlight active section
    $p = $("#uniquely_penn").offset();
    $content_offset = Math.floor($p.top - 171) -1;
    
    //$content_offset = 422;
    
    if ( $(window).scrollTop() > $content_offset ) {
      $("#register").slideDown(250);
      $("#wrapper_header").addClass("faded");
    } else {
      $("#register").slideUp(250);
      $("#wrapper_header").removeClass("faded");
    }
    
    $("#feedback").html( $(window).scrollTop() + " | " + $content_offset );
    
    //$("#feedback").html( $(window).scrollTop() + " / " + $content_offset + " / " + $("#container_header").height() + " / " + $scrollto );

  });
  
  // Navigation
  
  $("#container_header ul a,#register a").click(function(e) {
    e.preventDefault();
    
    if($(this).parent().attr("id") == "register") {
      $scrollto = 0;
    } else {
    
      $h = $(this).attr("href");
      $scrollto = $($h).offset().top;
    
      
    
    }
    
    if ( $(window).width() > 670 ) { $scrollto = $scrollto - $("#container_header").height() + 1; }
    if ( $(window).width() < 670 ) {
      $pt = parseInt( $("#register").css("padding-top").replace("px","") );
      $pb = parseInt( $("#register").css("padding-bottom").replace("px","") );
      $scrollto = $scrollto - $("#register").height() - $pt - $pb - 13;
    }
   // $("#feedback").html( $pt );
    
    $('html,body').animate({
      scrollTop: $scrollto
    },1000);
    
    
  });
  
  // Parents Form: add Parent
  $(".add_parent").click(function() {
    $(".hidden_parent").slideDown(750);
  });
  
  // Video popup
  $(".vid").click(function(e) {
    e.preventDefault();
    $url = $(this).attr("href");
    $("#wrapper_content").append('<div class="video_popup_wrapper"><div class="video_popup_container"><div class="popup_close">Close</div></div></div>');
    $(".video_popup_container").append('<iframe src="'+$url+'"></iframe>');
    video_resize();
    $(".video_popup_wrapper").fadeTo(500,1);
    
    $(".video_popup_wrapper").click(function() {
      $(".video_popup_wrapper").fadeOut(500,function() {
        $(".video_popup_wrapper").remove();
      });
    });
    
  });
  
  $(window).resize(function() {
    if($(".video_popup_wrapper").length) { video_resize(); }
  })

});

function video_resize() {

  // SCALE
  $(".video_popup_wrapper").height( $(window).height() );
  
  $h = Math.round($(".video_popup_container").width() * 0.56);
  $(".video_popup_container").height($h);
  
  $i = Math.round($(".video_popup_container iframe").width() * 0.56);
  $(".video_popup_container iframe").height($i);
  
  // POSITION
  $p_width = $(".video_popup_container").width() + 20;
  $p_height = $(".video_popup_container").height() + 20;
  
  $left = Math.round( ($(window).width() - $p_width)/2 );
  $top = Math.round( ($(window).height() - $p_height)/2 );
  
  $(".video_popup_container").css({
    "left":$left,
    "top":$top
  });
  
  $("#feedback").html($p_width + " | " + $(window).width() ); 
}