var twitchApiStreams = 'https://wind-bow.gomix.me/twitch-api/streams/';
var twitchApiUsers = 'https://wind-bow.gomix.me/twitch-api/users/';
var twitchUsers = $(["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]);

$( document ).ready(function() {
    twitchUsers.each(function(key,oneUser){
      getTheData(oneUser);
    });
    $(document).on('click','.online',function(){
      window.open($(this).attr('data-url'));
    });
});

function getTheData(user){

  $.getJSON(twitchApiStreams+user+'?callback=?', function(json) {
    if(json['stream']==null){
      $('#twitch').append('<div><div>Offline</div></div>');
    }
    else{
        $.getJSON(twitchApiUsers+user+'?callback=?', function(user) {
          $('#twitch').append('<div class="online" data-url="https://www.twitch.tv/'+user+'"">Online</div>');
        });
    }
  });
};
