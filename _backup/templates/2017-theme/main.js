$(document).ready(function() {
  
  $('header > div > button').on('click',function() {
    $('header > div > nav').toggleClass('open');
    if($(this).hasClass('open')) {
      $(this).removeClass('open').addClass('closed');
    } else {
      $(this).addClass('open').removeClass('closed');
    }
  });
  
  $('a[href^="#"]').on('click',function(e) {
    e.preventDefault();
    
    $('header > div > button,header > div > nav').removeClass('open').addClass('closed');
    
    h = $(this).attr("href");
    o = $(h).offset().top - $('header').height();
    
    s = Math.abs($(window).scrollTop() - o) * 0.33;
    
    $("html, body").animate({
      scrollTop: o
    },s);
  });
  
  s = 'abcdefghijklmnopqrstuvwxyz@.';
  e = $('#genemlink').data('em');
  m = '';
  for(i=0;i<e.length;i++) {
    m += s.charAt(e[i]);
  }
  $('#genemlink').parent().html('<a href="mailto:'+m+'">'+m+'</a>');
  
  // Fade portfolio items
  var grid = new Array();
  $('.portfolio-grid > article').each(function() {
    $(this).addClass('faded');
    grid.push($(this).offset().top);
  });
  
  $(window).scroll(function() {
    s = $(window).scrollTop();
    $('.portfolio-grid > article.faded').each(function() {
      if(s > ($(this).offset().top) - w + ($(this).height() * 0.66)) {
        $(this).removeClass('faded');
      }
    });
  });
  
  var w = $(window).height();
  $(window).resize(function() {
    w = $(window).height();
  });
  
  $("#feedback").html( $(window).width() );
	
});