$(document).ready(function() {
  <!-- Add your jQuery here -->
  $("p#one")
    .before("<h1>Paragraph One</h1>")
    .css('color', 'red');

  $("p#two")
    .before("<h1>Paragraph Two</h1>")
    .css('color', 'yellow');

  $("p#three")
    .before("<h1>Paragraph Three</h1>")
    .css('color', 'green');

  $("p.four")
    .before("<h1>Paragraph Four</h1>")
    .css('color', 'blue');

  $("p#five")
    .before("<h1>Paragraph Five</h1>")
    .css('color', 'pink');
});
