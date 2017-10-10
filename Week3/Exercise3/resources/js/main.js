$(document).ready(function(){
  $('body').append('<p>');

  $('body').keypress(function(e) {

    switch(e.key) {
      case 'Enter':
        $(this)
          .append('</p>')
          .append('<p>');
        break;
      default:
        $(this)
          .append(e.key);
        break;
    }
  });

  $('body').keyup(function(e) {

    switch(e.key) {
      case 'Backspace':
        $(this).html(
          $(this)
            .html()
            .substring(0, $(this).html().length - 1)
        );
        break;
    }
  });
});
