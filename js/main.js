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

document.addEventListener("keydown", changeBg);
function changeBg() {
	
	document.getElementById("btn1").style.backgroundColor = "White";
	document.getElementById("btn2").style.backgroundColor = "White";
	
}

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
