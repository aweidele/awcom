var $ = jQuery;
$(document).ready(function() {
  
  
  if( $("#intro p.scroll").length ) {
    $("#intro p.scroll a").click(function(e) {
      e.preventDefault();
      $h = $(this).attr("href");
      $o = $($h).offset().top;
      
      $('html,body').animate({
        scrollTop: $o
       },1000);
    });
  }
  
  $(window).scroll(function() {
  
    $s = $(window).scrollTop();
    if($s > 10) {
      $("#wrapper_header").addClass('scrollFade');
    } else {
      $("#wrapper_header").removeClass('scrollFade');
    }
  
  });
  
  if( $(window).width() < 760 ) {
  
    $("#nav").click(function(e) {
      $("#nav ul").slideToggle(500);
    });
    
    if( $(".sidebar h3").length > 0 ) {
      $(".sidebar h3").click(function() {
        $(this).siblings("ul").slideToggle(500);
      });
    }
  
  }
  
});

function portfolioGo($type) {

  $(document).ready(function() {

// BROWSER AND TABLET ONLY
if( $(window).width() > 760 ) {

    // FADE IN AND ARRANGE IMAGES ON LOAD
    $(".portfolio_item").hide().addClass("arranged");
    $(".portfolio_item img").load(function() {
      
      if($type == 0) {
        $(this).parent().parent().fadeTo(0,0,function() {
          portfolioArrange();
          $(this).fadeTo(1000,1);
        });
      } else {
        filterGo();
      }
      
    });
    
    // FILTER CLICK
    $(".filters a").click(function(e) {
      e.preventDefault();
      if( $(this).parent().hasClass("off") ) {
        $(this).parent().removeClass("off");
      } else {
        $(this).parent().addClass("off");
      }
      
      filterGo();
    });
    
    $(window).resize(function() { 
      portfolioArrange(); 
      $("#feedback").html( $(".portfolio_item img").height() ); 
    });

}
// end BROWSER AND TABLET ONLY
  });

} // portfolioGo

function filterGo() {
  
  $show = new Array();
  $(".filters li").each(function() {
    if(!$(this).hasClass("off")) {
      $h = $("a",this).attr("href").split("&cat=");
      $thiscat = $h[1];
      $show.push($thiscat);
    }
  });
  
  $(".portfolio_item").each(function() {
    
    $hidethis = 1;
    for($i=0; $i<$show.length; $i++) {
      if( $(this).hasClass($show[$i]) ) { $hidethis = 0; }
    }
    
    if($hidethis) {
      $(this).fadeOut(1000, function() { portfolioArrange(); });
    } else {
      $(this).fadeIn(1000, function() { portfolioArrange(); });
    }
  });
  
  

} // filterGo()

function portfolioArrange() {

  $w = $(".portfolio_grid").width();
  $itemWidth = $(".portfolio_item").width() + parseInt($(".portfolio_item").css("margin-right"));
  $itemHeight = $(".portfolio_item").height() + parseInt($(".portfolio_item").css("margin-bottom"));
  $totalHeight = $itemHeight * -1;
  
  $columns = Math.ceil($w / $itemWidth);
  $i = 0;
  //$msg = '<table><tr><td>i</td><td>i%c</td><td>totalHeight</td></tr>';
  
  $(".portfolio_item:visible").each(function() {
    
    //$msg += "<tr>";
    //$msg += "<td>"+$i+"</td>";
    //$msg += "<td>"+($i % $columns)+"</td>";
    
    if($i % $columns == 0) {
      $totalHeight += $itemHeight;
    }
    
    //$msg += "<td>"+$totalHeight+"</td>";
    
    $(this).css({
      "left":$itemWidth * ($i % $columns),
      "top":$totalHeight
    });
    $i++;
    
    //$msg += "</tr>"; // DELETE THIS
  });
  
  //$msg += "</table>";
  
  $totalHeight += $itemHeight;
  $(".portfolio_grid").height($totalHeight);

} // portfolioArrange()

function addEmail($email,$domain,$ext) {

  $(document).ready(function() {
  
    $ext_array = new Array("com","org","net","edu");
    $address = $email + "@" + $domain + "." + $ext_array[$ext];
    
    $msg = '<a href="mailto:'+$address+'">'+$address+'</a>';
    $("p.mobile_email span.email").html($msg);
  
  });

}