document.addEventListener('keydown', (event) => {
	if (event.repeat) return;

	if (event.key === 'a') playNote('#Chicks');
	else if (event.key === 'b') playNote('#Crows');
});

document.addEventListener('keyup', (event) => {
    if (event.repeat) return;
    
	if (event.key === 'a') pauseNote('#Chicks');
	else if (event.key === 'b') pauseNote('#Crow');
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
