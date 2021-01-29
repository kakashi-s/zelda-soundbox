function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //backticks are used in querySelector to allow for evaluation 
    //of the variable ${e.keyCode} inside of the string

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; 
    //stops the function from running if data-key has no audio
    
    audio.currentTime = 0;
    //allows you to hammer the buttons instead of waiting for audio to finish

    audio.volume = 0.25;
    //lower audio volume

    audio.play();
    //plays the audio element we have from the querySelector

    key.classList.add('playing');
    }

//remove classlist playing to remove pause time
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
    

