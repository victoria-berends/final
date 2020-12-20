document.addEventListener('keydown', (event) => {
	if (event.repeat) return;

	if (event.key === 'e') {
		playNote('#Chicks');
		addClass('#btn1', 'click_pink');
	} else if (event.key === 'r') {
		playNote('#Crows');
	addClass('#btn2', 'click_pink');
}
	else if (event.key === 't') {
		playNote('#Bluejay');
		addClass('#btn3', 'click_pink');
	}
	else if (event.key === 'y') {
		playNote('#Bluejay2');
		addClass('#btn4', 'click_pink');
	}
	else if (event.key === 'u') {
		playNote('#Cardinal');
		addClass('#btn5', 'click_pink');
	}
	else if (event.key === 'i') {
		playNote('#Cartoon');
		addClass('#btn6', 'click_pink');
	}
	else if (event.key === 'd') {
		playNote('#Owl');
		addClass('#btn7', 'click_green');
	}
	else if (event.key === 'f') {
		playNote('#Duck');
		addClass('#btn8', 'click_green');
	}
	else if (event.key === 'g') {
		playNote('#Lark');
		addClass('#btn9', 'click_green');
	}
	else if (event.key === 'h') {
		playNote('#Geese');
		addClass('#btn10', 'click_green');
	}
	else if (event.key === 'j') {
		playNote('#Warb');
		addClass('#btn11', 'click_green');
	}
	else if (event.key === 'c') {
		playNote('#Crows');
		addClass('#btn12', 'click_blue');
	}
	else if (event.key === 'v') {
		playNote('#Bluejay');
		addClass('#btn13', 'click_blue');
	}
	else if (event.key === 'b') {
		playNote('#Bluejay2');
		addClass('#btn14', 'click_blue');
	}
	else if (event.key === 'n') {
		playNote('#Cardinal');
		addClass('#btn15', 'click_blue');
	}
});

document.addEventListener('keyup', (event) => {
	if (event.repeat) return;

	if (event.key === 'e') {
		pauseNote('#Chicks');
		removeClass('#btn1', 'click_pink');
	} else if (event.key === 'r') {
		pauseNote('#Crows');
		removeClass('#btn2', 'click_pink');
	}
	else if (event.key === 't') {
		pauseNote('#Bluejay');
		removeClass('#btn3', 'click_pink');
	}
	else if (event.key === 'y') {
		pauseNote('#Bluejay2');
		removeClass('#btn4', 'click_pink');
	}
	else if (event.key === 'u') {
		pauseNote('#Cardinal');
		removeClass('#btn5', 'click_pink');
	}
	else if (event.key === 'i') {
		pauseNote('#Cartoon');
		removeClass('#btn6', 'click_pink');
	}
	else if (event.key === 'd') {
		pauseNote('#Owl');
		removeClass('#btn7', 'click_green');
	}
	else if (event.key === 'f') {
		pauseNote('#Duck');
		removeClass('#btn8', 'click_green');
	}
	else if (event.key === 'g') {
		pauseNote('#Lark');
		removeClass('#btn9', 'click_green');
	}
	else if (event.key === 'h') {
		pauseNote('#Geese');
		removeClass('#btn10', 'click_green');
	}
	else if (event.key === 'j') {
		pauseNote('#Warb');
		removeClass('#btn11', 'click_green');
	}
	else if (event.key === 'c') {
		pauseNote('#Crows');
		removeClass('#btn12', 'click_blue');
	}
	else if (event.key === 'v') {
		pauseNote('#Bluejay');
		removeClass('#btn13', 'click_blue');
	}
	else if (event.key === 'b') {
		pauseNote('#Bluejay2');
		removeClass('#btn14', 'click_blue');
	}
	else if (event.key === 'n') {
		pauseNote('#Cardinal');
		removeClass('#btn15', 'click_blue');
	}
});

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

function addClass(id, className) {
	const elem = document.querySelector(id);
	elem.classList.add(className);
}

function removeClass(id, className) {
	const elem = document.querySelector(id);
	elem.classList.remove(className);
}

// Get the video
var video = document.getElementById('myVideo');

// Get the button
var btn = document.getElementById('myBtn');

var audioElem = document.getElementById('play');
audioElem.addEventListener('play', () => {
	myBackgroundVideo();
});
audioElem.addEventListener('pause', () => {
	myBackgroundVideo();
});

// Pause and play the video, and change the button text
function myBackgroundVideo() {
	if (video.paused) {
		video.play();
		btn.innerHTML = 'Pause';
	} else {
		video.pause();
		btn.innerHTML = 'Play';
	}
}

// Play/Pause song 
let pressedPlay = function() {
	if (isPlaying) {
		audio.pause()
		isPlaying = false  // Flip the switch
		play.textContent = `▶️`
	} else {
		audio.play()
		isPlaying = true
		play.textContent = `⏸`
	}
}
let play = document.querySelector(`#start`)
play.addEventListener(`click`, pressedPlay)


// Next song -----------------------------------------
let pressedNext = function() {
	whichSongAmIOn = whichSongAmIOn + 1
	playASong(whichSongAmIOn)
	// What if there is no song at that index? 😬
}
let next = document.querySelector(`#next`)
next.addEventListener(`click`, pressedNext)


// ---------------------------------------------------
// Start by loading up a new song (but don't play it yet, user must press ▶️)
playASong(0)
