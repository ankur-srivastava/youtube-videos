const request = require('request');

var videoId = '';
var api_key = '****';

//For testing purpose
var youtube_url = 'https://www.youtube.com/watch?v=Yl6ggYwxL3c&t=2s';
var v = youtube_url.indexOf('v=');
var endIndex = youtube_url.indexOf('&');

videoId = youtube_url.substring((v+2),endIndex);
var url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+videoId+'&key='+api_key;

var videoRes = function(){
  request({
    url,
    json: true
  }, (err, res, body)=>{
    if(err){
      console.log(err);
    }
    var video = res.body.items[0];
    var title = video.snippet.title;
    var tags = video.snippet.tags;

    console.log('----Title----',title);
    console.log('----Tags----',tags);


  });
};
videoRes();
