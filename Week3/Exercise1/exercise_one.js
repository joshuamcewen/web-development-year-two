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
    $('div#news').toggle();
  });

  // About us toggle
  $('li#aboutus').click(function(){
    $('div#aboutus').toggle();
  });

  // Contact us toggle
  $('li#contactus').click(function(){
    $('div#contactus').toggle();
  });

});
