document.addEventListener('keydown', (event) => {
	if (event.repeat) return;

	if (event.key === 'a') playNote('#note_c');
	else if (event.key === 'b') playNote('#note_d');
});

document.addEventListener('keyup', (event) => {
    if (event.repeat) return;
    
	if (event.key === 'a') pauseNote('#note_c');
	else if (event.key === 'b') pauseNote('#note_d');
});

function playNote(id) {
    const audio = document.querySelector(id);
    // @Tori --> I set the currentTime to 2 below because one of my files 
    // had a bit of dead time at the beginning of the mp3.
    // You'll probably want it to be 0 if your files start right at the beginning. 
	audio.currentTime = 2;
	audio.volume = 0.6;
	audio.play();
}

function pauseNote(id) {
	const audio = document.querySelector(id);
	audio.pause();
}
