$(document).ready(function(){
  $('table').css('border', '1px solid black');
  $('table td')
    .css('height', '40px')
    .css('width', '40px');
  $('table tr:even td:even').css('background', 'black');
  $('table tr:odd td:odd').css('background', 'black');
});
