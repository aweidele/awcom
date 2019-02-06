/****************/
/** INITIALIZE **/
/****************/
function aaron_go() {

$(document).ready(function() {

  $msg = "";
  
  // hide all content elements
  $(".content_block,#wrapper_footer,#container_header nav").hide();
  

});

$(window).load(function() {

  // get content heights
  $(".portfolio_item h3,.portfolio_item p").hide();  
  $content_height = new Array();
  $(".content_block").each(function() { $content_height.push( $(this).height() ); });
  $h = $(window).height() - $("#wrapper_header").height();
  
  // set window.resize actions
  $(window).resize(function() {
    set_content_height();
  });
  
  // show content elements
  $(".content_block,#wrapper_footer,#container_header nav").fadeIn(1000);
  set_content_height();
  

/****************/
/** NAVIGATION **/
/****************/
  $nav_speed = 1250;
  $("#container_header h1 a").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
      scrollTop:0
    },$nav_speed);
  });
  
  $("#container_header nav a").click(function(e) {
  
    $(".portfolio_fixed").removeClass("fixed");
    if(!$(this).hasClass("link")){
      e.preventDefault();
      $thisclick = $(this).attr('href');
      
      $('html,body').scrollTop( $($thisclick).offset().top );
      
      $('html,body').animate(
        {
          scrollTop : $($thisclick).offset().top - $("#wrapper_header").height() + parseInt( $($thisclick).css("padding-top").replace("px","") )
        },$nav_speed);
    }
  });

/********************/
/** PORTFOLIO INIT **/
/********************/

  $current_portfolio = 0;

  $(".portfolio_item").addClass("portfolio_item_float");
  $(".portfolio_slider").each(function() {
    $total_width = 0;
    $total_height = 0;
    $(".portfolio_item",this).each(function() {
      $total_width += $("img",this).width() + parseInt( $(this).css("margin-right").replace("px","") );
      if ($total_height < $("img",this).height() ) { $total_height = $("img",this).height(); }
    });
    
    $(this).width($total_width);
    $(this).height($total_height);
    $(this).parent().height($total_height);
    $(this).css({
      "position":"absolute"
    });
    
  });
  
  $(".content_block.portfolio").each(function() {
    $(this).prepend('<div class="portfolio_fixed"><div class="portfolio_fixed_container"></div></div>');
    
    $(".page_content",this).appendTo( $(".portfolio_fixed_container",this) );
  });
  
  $(".portfolio_container").append('<div class="portfolio_nav"><div class="previous">« previous</div><div class="info"><h3></h3><p></p></div><div class="next">next»</div><div class="clear"></div></div>');

  
  // add click to previous/next
  $portfolio_speed = 1000;
  $(".portfolio_nav .previous").click(function() {
    $current_portfolio--;
    if ($current_portfolio < 0) { $current_portfolio = 0; }
    
    $scroll_pos = $portfolio_stop[$current_page][$current_portfolio] 
                + $stops[$current_page]
                + $current_pad_top;
    
    $('html,body').animate({
      "scrollTop":$scroll_pos
    });
    
  });
  
  $(".portfolio_nav .next").click(function() {
    $current_portfolio++;
    if ($current_portfolio > $(".content_block:eq("+$current_page+") .portfolio_item").length-1) { 
      $current_portfolio = $(".content_block:eq("+$current_page+") .portfolio_item").length-1; }
    
    $scroll_pos = $portfolio_stop[$current_page][$current_portfolio] 
                + $stops[$current_page]
                + $current_pad_top;
    
    $('html,body').animate({
      "scrollTop":$scroll_pos
    });
    
  });
  
  
/***************/
/** SCROLLING **/
/***************/

  // set stops
  set_stops();
  
  $(window).scroll(function() {

  // determine the current page
    $scroll = $(window).scrollTop();
    for($i=0;$i<$stops.length;$i++) {
      if($scroll >= $stops[$i]) { $current_page = $i; }
    }
  $current_pad_top = parseInt( $(".content_block:eq("+$current_page+")").css("padding-top").replace("px","") );
  $current_pad_bottom = parseInt( $(".content_block:eq("+$current_page+")").css("padding-bottom").replace("px","") );
  $current_scroll = $scroll - $stops[$current_page] - $current_pad_top;
  $scroll_end = $(".content_block:eq("+$current_page+")").height() - $current_scroll;

  // Illustration In/Out
    $(".container_page_illustration").removeClass("illustration_active");
    $(".content_block:eq("+$current_page+") .container_page_illustration").addClass("illustration_active");
    
    $illustration_in = $current_scroll / $current_pad_top;
    if($illustration_in > 0) { $illustration_in = 0; }
    
    $(".content_block:eq("+$current_page+") .container_page_illustration .illustration1").css({
      "top":$(".content_block:eq("+$current_page+") .container_page_illustration .illustration1").height() * $illustration_in });  
    $(".content_block:eq("+$current_page+") .container_page_illustration .illustration2").css({
      "right":$(".content_block:eq("+$current_page+") .container_page_illustration .illustration2").width() * $illustration_in });
      
    $illustration_out = $scroll_end / $current_pad_bottom;
    if($illustration_out > 0) { $illustration_out = 0; }
    
    $(".content_block:eq("+$current_page+") .container_page_illustration .illustration2").css({
      "top":$(".content_block:eq("+$current_page+") .container_page_illustration .illustration2").height() * $illustration_out });  
    $(".content_block:eq("+$current_page+") .container_page_illustration .illustration1").css({
      "right":$(".content_block:eq("+$current_page+") .container_page_illustration .illustration1").width() * $illustration_out });
    
    
  // Portfolio
    if( $(".content_block:eq("+$current_page+")").hasClass("portfolio") ) {

      // set portfolio slider to fixed
      if ($current_scroll >= 0 && $scroll_end >= 0 ) { 
        $(".content_block:eq("+$current_page+") .portfolio_fixed").addClass("fixed"); 
      } else {
        $(".content_block:eq("+$current_page+") .portfolio_fixed").removeClass("fixed");
      }

      // move portfolio slider left and right
      $scroll_pct = $current_scroll / $(".content_block:eq("+$current_page+")").height() * -1;
      if ($scroll_pct <= -1) { $scroll_pct = -1; }

      $(".content_block:eq("+$current_page+") .portfolio_slider").css({
        "left":$(".content_block:eq("+$current_page+") .portfolio_slider").width() * $scroll_pct
      });


      // determine portfolio slider position
      for($i=0;$i<$portfolio_stop[$current_page].length;$i++) {        
        if($current_scroll >= $portfolio_stop[$current_page][$i]) { $current_portfolio = $i; }
      }
      
      // show information
      $p_title = $(".content_block:eq("+$current_page+") .portfolio_item:eq("+$current_portfolio+") h3").html();
      $p_text  = $(".content_block:eq("+$current_page+") .portfolio_item:eq("+$current_portfolio+") p").html();
      $(".content_block:eq("+$current_page+") .portfolio_container .portfolio_nav .info h3").html($p_title);
      $(".content_block:eq("+$current_page+") .portfolio_container .portfolio_nav .info p").html($p_text);

    } /* if hasClass("portfolio") */
    
    $msg = "";    
//    $msg += "Scroll: " + $scroll + "<br />";
//    $msg += "Current: " + $current_page + "<br />";
//    $msg += "Padding-top: " + $current_pad_top + "<br />"
//    $msg += "Padding-bottom: " + $current_pad_bottom + "<br />"
//    $msg += "Current Scroll: " + $current_scroll + "<br />";
//    $msg += "Current Port: " + $current_portfolio + "<br />";
//    $msg += "Scroll End: " + $scroll_end + "<br />";
//    $msg += $scroll_pct + "<br />";
//    $msg += $(".content_block:eq("+$current_page+")").height();
    $("#feedback").html($msg);


  }); /* $(window).scroll() */
  
});

} /* aaron_go() */

/************************/
/** SET_CONTENT_HEIGHT **/
/************************/
  function set_content_height() {
  
    $h = $(window).height() - $("#wrapper_header").height();
    $pad = Math.floor($h);
    
    $i = 0;
    $(".content_block").each(function() {
      if ($content_height[$i] < $h) {
        $(this).height($h);
      } else {
        $(this).height($content_height[$i]);
      }
      $i++;
      
      if ( $(this).index() == $(".content_block").length - 1 || $(this).hasClass("content_full") ) {
        $(this).css({ 
          "padding-top":$pad 
        })
      } else if ( $(this).index() != $(".content_block").length - 1 && $(this).index() != 0) {
        $(this).css({
          "padding-top":$pad,
          "padding-bottom":$pad/2
        });
      }
      
    }); /* $(".content_block").each */
    
    // position illustrations
    $(".container_page_illustration").css({
      "top": $("#wrapper_header").height() + Math.round( ($h - $(".container_page_illustration").height()) / 2)
    });
    
    // set stops
    set_stops();

  } /* set_content_height() */
  
/***************/
/** SET STOPS **/
/***************/
function set_stops() {

  $stops = new Array();
  $ends  = new Array();
  $portfolio_stop = new Array();
  $(".content_block").each(function() { 
    $stops.push( $(this).offset().top - $("#wrapper_header").height() );
    $ends.push ( $(this).offset().top + $(this).height() );
    
    if ( $(this).hasClass("portfolio") ) {
      
      $i = $(this).index();
      $portfolio_stop[ $i ] = new Array();
      $stop_width = Math.round( $(this).height() / $(".portfolio_item",this).length );
      
      $(".portfolio_item",this).each(function() {
        $portfolio_stop[$i].push( $stop_width * $(this).index() );
      });
    }
    
    
  });
  
  $msg = "";
  for($i=0;$i<$portfolio_stop.length;$i++) {
    $msg += $portfolio_stop[$i] + "<br />";
  }
  
  $("#feedback").html($msg);
} /* set_stops */

/*******************************/
/** MAIL SCRIPT TO AVOID SPAM **/
/*******************************/
function mail(u,d,e,s) {

  ext = new Array('.com','.net','.org','.edu');

  m = '<a href="mailto:'+u+'@'+d+ext[e];
  if(s!='') { '?subject='+s; }
  m += '">';
  m += u+'@'+d+ext[e];
  m += '</a>';
  
  document.write(m);
}