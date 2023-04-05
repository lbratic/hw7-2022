var video = document.querySelector("video")

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Playing video");
	video.play();
	document.querySelector("#volume").innerHTML = ((video.volume * 100) + "%");
})

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pausing video");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowing down video");
	video.playbackRate = (video.playbackRate - (video.playbackRate * 0.1));
	console.log("Playback Rate: " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speeding up video");
	video.playbackRate = (video.playbackRate + (video.playbackRate * 0.1));
	console.log("Playback Rate: " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current Time: " + video.currentTime);
	console.log("Skipping ahead in video");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		console.log("End of video reached, returning to the beginning");
		video.currentTime = 0;
	}
	console.log("New Time: " + video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").innerHTML == "Mute") {
		console.log("Muting video");
		video.volume = 0;
		document.querySelector("#mute").innerHTML = "Unmute";
		document.querySelector("#volume").innerHTML = (0 + "%");
	}

	else if (document.querySelector("#mute").innerHTML == "Unmute") {
		console.log("Unmuting video");
		video.volume = 1;
		document.querySelector("#mute").innerHTML = "Mute";
		document.querySelector("#volume").innerHTML = ((video.volume * 100) + "%");
	}
})

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Inside of the slider");
	console.log(this.value + "%");
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = ((video.volume * 100) + "%");
})

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing to vintage");
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing to original");
	video.classList.remove("oldSchool");
})