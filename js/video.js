var vid

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	vid = document.getElementById("player1");
	vid.autoplay = false;
	vid.loop = false;
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

document.querySelector("#slider").addEventListener("input", function () {
	let vidVolume = document.getElementById("volume");

	vid.volume = this.value / 100;
	vidVolume.textContent = this.value+'%';

	console.log("The current Volume is:",(vid.volume))
});


document.querySelector("#vintage").addEventListener("click", function () {
	vid.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	vid.classList.remove("oldSchool");
});