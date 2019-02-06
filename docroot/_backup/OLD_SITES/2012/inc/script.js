function portfolio_init() {
  
  $(".slide").css({
    "float":"left",
    "margin-right":"50px"
  });
  
  shrink_slides();

  $("#portfolio").css({
    "overflow-x":"scroll"
  });
  
  $("#slides").hide();
  $("#ajax_loader").show();
  
  $(window).load(function() {
    $("#ajax_loader").hide();
    $("#slides").fadeIn(500); 
  });
  
  $(window).resize(function() {
    shrink_slides();
  });
  
  $("#contact p.nav a.jump").click(function(event) {
    event.preventDefault();
    //alert( $(this).attr("href") );
    
    $('html, body').animate({
         scrollTop: $( $(this).attr("href") ).offset().top
     }, 1000);
    
  });
  /*
  $(".slide p").html( $(this).parent().offset().left );
  
  $current = 0;
  $num_images = $(".slide").length;
  $("#portfolio-nav li").click(function() {
    if ( $(this).index() == 1 ) {
      $current ++;
      if ($current > $num_images) { $current = $num_images; }
    } else {
      $current --;
      if ($current < 0) { $current = 0 }
    }
    
    $("#portfolio").animate({
      scrollLeft: $(".slide:eq("+$current+")").offset().left
    },1000);
  });*/
  
}

function arrange_slides() {

  $total_width = 0;
    
  $(".slide").each(function() {
    $total_width += $(this).width() + 50;
  });
  
  $("#slides").width($total_width);
  
}

function shrink_slides() {
  $w = $(window).width();
  
  if ($w < 530) {
    $size = 1;
  } else {
    $size = 2;
  }
  
  if ($size == 1) {
    $(".slide img").width(320);
    $(".slide").width(320);
    $(".slide img").height(234);
    $(".slide").height(280);
    $("#portfolio").height(300);
  } else {
    $(".slide img").width(600);
    $(".slide").width(600);
    $(".slide img").height(468);
    $(".slide").height(500);
    $("#portfolio").height(550);
  }
  
  arrange_slides();
}