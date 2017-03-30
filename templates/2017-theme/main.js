$(document).ready(function() {
  
  $('header > div > button').on('click',function() {
    $('header > div > nav').toggleClass('open');
    if($(this).hasClass('open')) {
      $(this).removeClass('open').addClass('closed');
    } else {
      $(this).addClass('open').removeClass('closed');
    }
  });
  
 
    $("#feedback").html( $(window).width());
  $(window).resize(function() {
    $("#feedback").html( $(window).width());
  });
  
  $('a[href^="#"]').on('click',function(e) {
    e.preventDefault();
    
    $('header > div > button,header > div > nav').removeClass('open').addClass('closed');
    
    h = $(this).attr("href");
    o = $(h).offset().top - $('header').height();
    
    s = Math.abs($(window).scrollTop() - o) * 0.75;
    
    $("html, body").animate({
      scrollTop: o
    },s);
  });
  
});