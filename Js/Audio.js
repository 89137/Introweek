let audio = new Audio('../Audio/Yukon.mp3');
let audio2 = new Audio('../Audio/remember.mp3');
let audio3 = new Audio('../Audio/Beggin.mp3');

window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return;
    }
    if (event.key === "a"){
        audio.play();
        audio.loop = false
    } else if (event.key === "s"){
        audio2.play();
        audio.loop = false
    } else if (event.key === "d"){
        audio3.play();
        audio.loop = false
    }

    refreshPosition();
    event.preventDefault();
}, true);

function pauseAudio() {
    audio.pause();
    audio2.pause();
    audio3.pause();
}