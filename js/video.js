let vid = document.getElementById("player1");


window.addEventListener("load", function () {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	vid.play();
	document.getElementById("volume").textContent = Math.round(document.getElementById("slider").value)+'%'
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	vid.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	vid.playbackRate = vid.playbackRate * 0.9;
	console.log("Video is playing back at:", vid.playbackRate.toFixed(2));
});


document.querySelector("#faster").addEventListener("click", function () {
	vid.playbackRate = vid.playbackRate * 1.1;
	console.log("Video is playing back at:", vid.playbackRate.toFixed(2));
});

document.querySelector("#skip").addEventListener("click", function () {
	const newTime = vid.currentTime + 10;
	if (newTime >= vid.duration) {
		vid.currentTime = 0;
		console.log("Video reset to the start");
	}
	else {
		vid.currentTime = newTime;
		console.log("Video advanced. Current time in seconds:", vid.currentTime.toFixed(2))
	}
});

document.querySelector("#mute").addEventListener("click", function () {
	vid.muted = !vid.muted;
	if (vid.muted) {
		document.getElementById("mute").textContent = "Unmute";
	}
	else {
		document.getElementById("mute").textContent = "Mute";
	}
});

// vidVolume.textContent = '${Math.round(volumeSlider*100)}%';

document.querySelector("#slider").addEventListener("input", function () {
	let vidVolume = document.getElementById("volume");

	vid.value = this.value;
	vidVolume.textContent = Math.round(vid.value)+'%';
});


document.querySelector("#vintage").addEventListener("click", function () {
	vid.classList.toggle("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	vid.classList.remove("oldSchool");
});