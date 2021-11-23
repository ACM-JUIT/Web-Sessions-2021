window.addEventListener("keydown",function(event){
    makeSound(event.keyCode)
});
window.addEventListener("keyup",function(event){
    stopSound(event.keyCode)
});

function makeSound(key){
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    console.log(audio);
    audio.play();
}

function stopSound(key){
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    console.log(audio);
    audio.pause();
}

