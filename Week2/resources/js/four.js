$(document).ready(function(){
  $('tr td').each(function(){
    var rgb = $(this).css("background-color");
    $(this).text(rgb);
  });
});
