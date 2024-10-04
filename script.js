// const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// sounds.forEach(sound => {
//     const btn = document.createElement('button')// Create button and set properties
//     btn.classList.add('btn')// adding css on the button

//     btn.innerText = sound  

//     btn.addEventListener('click', () => {
//         stopSongs() // stop the current sound

//         document.getElementById(sound).play() // Play the clicked sound
//     })

//     document.getElementById('buttons').appendChild(btn)  // Add the button to the HTML , when its loaded
// })

// function stopSongs() {s
//     sounds.forEach(sound => {
//         const song = document.getElementById(sound)

//         song.pause()
//         song.currentTime = 0;
//     })
// }

function playSound(soundId) {
  document.getElementById(soundId).play();
}
