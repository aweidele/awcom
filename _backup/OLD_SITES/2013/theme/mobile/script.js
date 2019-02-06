$(document).ready(function() {
  $("#container_footer a").click(function(e) {
    e.preventDefault();
    
    $('html,body').animate({
      scrollTop: 0
    },1000);
    
  });
});

function mail(u,d,e,s) {

  ext = new Array('.com','.net','.org','.edu');

  m = '<a href="mailto:'+u+'@'+d+ext[e];
  if(s!='') { '?subject='+s; }
  m += '">';
  m += u+'@'+d+ext[e];
  m += '</a>';
  
  document.write(m);
}