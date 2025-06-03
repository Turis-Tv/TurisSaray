      	var url_string = window.location.href;
var url = new URL(url_string);
var cid = url.searchParams.get("id"); 
document.write(" <iframe  id='frame' name='frame' src='https://saraydorf.de/spor/player/webplayer/?s=https://alpha.cf-worker-7df90b083f9d09.workers.dev/live/"+cid+"/playlist.m3u8' width='100%'  height='100%' frameborder='0' allowfullscreen scrolling='no' sandbox='none-popups allow-scripts allow-same-origin'></iframe>");

