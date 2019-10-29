function playSound(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!sound) return;
  sound.currentTime = 0;
  sound.play()

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  key.classList.add('playing')
}
window.addEventListener('keydown', playSound)

function removeTransition(e) {
  e.target.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition))
