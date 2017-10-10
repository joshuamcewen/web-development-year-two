$(document).ready(function(){
  $('div').each(function(){
    $(this).click(function(){
      $(this)
        .animate({
          'width': '100%'
        }, 1000, function(){
          $('body').css('background-color', $(this).css('background-color'));
        }).animate({
          'width': '16%'
        }, 1000);
    });
  });
});
