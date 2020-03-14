function $(id){  //less typing
    if(id.startsWith(".")){
        return document.getElementsByClassName(id.substring(1));
    }else{
        return document.getElementById(id);
    }
}

// set devMode to false in production //
var devMode = false;

var videoLoaded = false;

function showHide(id, display){
    $(id).style.display = display;
}

function loadVideo(){
     return new Promise(function(resolve){
         if(videoLoaded){
             resolve()
         }else{
             $('eggVideo').oncanplay = function() {
                 resolve();
             };
         }
     })
}

async function giveEgg(){
    await loadVideo();
    showHide('eggLoader', 'none');
    showHide('video', 'block');
    $('eggVideo').play();
}

function sendEgg(){
    console.log("sharing egg...");
    navigator.share({
        text: '🥚 Get a 🆓 egg! 🥚',
        url: location.href,
    });
}

function loadEgg(){
    console.log('giving egg to user');
    showHide('top', 'none');
    showHide('eggTime', '');
    //show loading spinner for about 1 sec
    showHide('eggLoader', 'block');
    setTimeout(function() { giveEgg(); }, 350);
}

$('eggVideo').oncanplay = function() {
    videoLoaded = true;
};
