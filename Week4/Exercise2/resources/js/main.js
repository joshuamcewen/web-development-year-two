$(document).ready(function(){

  var players = [];

  // Search array for match
  function findPlayer(id) {
    for(var i = 0; i < players.length; i++) {
      if(players[i].id == id) {
        return players[i];
      }
    }
  }

  // Display player in HTML container
  function displayPlayer(player) {
    $('#player').html('')
                .append('<span><img src="' + player.avatar + '"></span>')
                .append('<span>ID: ' + player.id + '</span>')
                .append('<span>Class: ' + player.user_class + '</span>')
                .append('<span>Name: ' + player.name + '</span>')
                .append('<span>Score: ' + player.score + '</span>')
                .append('<span>Email: ' + player.email + '</span>');
  }

  $.get('exercise_two.xml', function(data) {
    $(data).find('player').each(function(){

      var id = $(this).find('id').text();
      var user_class = $(this).attr('class');
      var name = $(this).find('name').text();
      var score = $(this).find('score').text();
      var email = $(this).find('email').text();
      var avatar = $(this).attr('avatar');

      players.push({id: id, user_class: user_class, name: name, score: score, email: email, avatar: avatar});

      displayPlayer(players[0]);

      $('#menu').append('<div data-id="' + id + '"><img src="' + avatar + '"></div>');

    });

    $('#menu div').click(function(){
      var matched_player = findPlayer($(this).data('id'));
      displayPlayer(matched_player);
    });
  });
});
