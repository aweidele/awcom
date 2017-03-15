$(document).ready(function() {
  
  $('header > div > button').on('click',function() {
    $('header > div > nav').toggleClass('open');
    if($(this).hasClass('open')) {
      $(this).removeClass('open').addClass('closed');
    } else {
      $(this).addClass('open').removeClass('closed');
    }
  });
  
 /* 
    $("#feedback").html( $(window).width());
  $(window).resize(function() {
    $("#feedback").html( $(window).width());
  });
  */
  
});