var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume * 100 + "%";
	console.log("Play Video");
	console.log(video);

}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
 }

 function decreaseSpeed() {
	 	video.playbackRate *= 0.8;
   	console.log("Speed is" + video.playbackRate );
 }

 function increaseSpeed() {
	video.playbackRate *=1.25;
 	console.log("Speed is "+ video.playbackRate);
 }

 function skipAhead() {
	 video.currentTime += 60;
	 console.log("Current location is "+ video.currentTime);
	 if (video.currentTime > video.duration-60){
		 video.currentTime = 0;
		 console.log("Current location is " + 0);
	 }
 }

 function mute() {
	 		if(video.muted){
   			console.log("Changing to Unmuted");
				video.muted = false;
				document.querySelector("#mute").innerHTML = "muted";
			}
			else{
      	console.log("Chaning to Muted");
				video.muted = true;
				document.querySelector("#mute").innerHTML = "Unmute";
			}
 }

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value/100;
	video.volume = volume;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume is " + video.volume * 100+ "%");
}


function gray() {
	document.querySelector("#myVideo").classList.add("grayscale");
 	console.log("In grayscale")
 }

 function color() {
	document.querySelector("#myVideo").classList.remove("grayscale");
 	console.log("In color")
 }
