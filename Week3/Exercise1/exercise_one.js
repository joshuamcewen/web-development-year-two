$(document).ready(function() {

  // Toggle menu on mouse in/out.
  $('div#outermenu')
  .mouseenter(function(){
    $('ul.menu').slideDown();
  })
  .mouseleave(function(){
    $('ul.menu').slideUp();
  });

  // News toggle
  $('li#news').click(function(){
    $('div#news').fadeToggle();
  });

  // About us toggle
  $('li#aboutus').click(function(){
    $('div#aboutus').fadeToggle();
  });

  // Contact us toggle
  $('li#contactus').click(function(){
    $('div#contactus').fadeToggle();
  });

});
