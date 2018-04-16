var twitchApi = 'https://wind-bow.gomix.me/twitch-api/users/';
var twitchUsers = $(["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]);

$( document ).ready(function() {
    twitchUsers.each(function(key,oneUser){
      getTheData(oneUser);

    });
});

function getTheData(user){
  $.getJSON(twitchApi+user+'?callback=?', function(json) {
    if(json['stream']==null){
      $('#twitch').append('<div>Offline</div>');
      console.log(json);
    }
    else{
      $('#twitch').append('<div>Online</div>');
        console.log(json);
    }
  });
};
