document.addEventListener('keydown', (event) => {
	if (event.repeat) return;

	if (event.key === 'e') playNote('#Chicks');
	else if (event.key === 'r') playNote('#Crows');
	else if (event.key === 't')playNote('#Bluejay');
	else if (event.key === 'y')playNote('#Bluejay2');
	else if (event.key === 'u')playNote('#Cardinal');
	else if (event.key === 'i')playNote('#Cartoon');
	else if (event.key === 'd')playNote('#Owl');
	else if (event.key === 'f')playNote('#Duck');
	else if (event.key === 'g')playNote('#Lark');
	else if (event.key === 'h')playNote('#Geese');
	else if (event.key === 'j')playNote('#Warb');
	else if (event.key === 'c') playNote('#Crows');
	else if (event.key === 'v')playNote('#Bluejay');
	else if (event.key === 'b')playNote('#Bluejay2');
	else if (event.key === 'n')playNote('#Cardinal');
});


document.addEventListener('keyup', (event) => {
    if (event.repeat) return;
    
	if (event.key === 'e') pauseNote('#Chicks');
	else if (event.key === 'r') pauseNote('#Crows');
	else if (event.key === 't') pauseNote('#Bluejay');
	else if (event.key === 'y') pauseNote('#Bluejay2');
	else if (event.key === 'u') pauseNote('#Cardinal');
	else if (event.key === 'i') pauseNote('#Cartoon');
	else if (event.key === 'd') pauseNote('#Owl');
	else if (event.key === 'f') pauseNote('#Duck');
	else if (event.key === 'g') pauseNote('#Lark');
	else if (event.key === 'h') pauseNote('#Geese');
	else if (event.key === 'j') pauseNote('#Warb');
	else if (event.key === 'c') pauseNote('#Crows');
	else if (event.key === 'v') pauseNote('#Bluejay');
	else if (event.key === 'b') pauseNote('#Bluejay2');
	else if (event.key === 'n') pauseNote('#Cardinal');
});
//document.getElementById ('#btn1').addEventListener("onkeydown", changeBg);
/*document.addEventListener("keydown", (event) =>{
	if (event.key === 'e') return;
 changeBg('#feabff') {*/
	
/*document.getElementById("btn1").style.backgroundColor = "#feabff";
	return false;
	
}

function btncolour (id) {
	const changeBg= document.querySelector(id);
	changeBg.event.key
newFunction();
function newFunction() {
	 
}

/*$('#btn1').keypress(function(e){
	if(e.which == 13){
		$(this).css('background-color','#feabff');
	}
  });

  $('#btn1').keyup(function(e){
	if(e.which == 13){
		$(this).css('background-color','');
	}
  });*/
// from stackoverflow//

function playNote(id) {
    const audio = document.querySelector(id);
    
	audio.currentTime = 0;
	audio.volume = 0.6;
	audio.play();
}

function pauseNote(id) {
	const audio = document.querySelector(id);
	audio.pause();
}
 
function changeBg (){
	 document.getElementById ('#btn1').innerHTML
	 = changeBg ('#feabff');

 
 }
  
 // Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myBackgroundVideo() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
