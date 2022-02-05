const video = document.querySelector('.video-player');
const bigPlayButton = document.querySelector('.play-hover');
const playbutton = document.querySelector('.play-button');
const progress = document.querySelector('#progress');
const muteButton = document.querySelector('.mute-buton');
const volume = document.querySelector('#volume');

function togglePlay() {
    if (video.paused) {
        video.play();
        bigPlayButton.classList.add('pause');
        playbutton.classList.add('pause');
    }
    else {
        video.pause();
        bigPlayButton.classList.remove('pause');
        playbutton.classList.remove('pause');
    }
}

// video.addEventListener('pause', () => {
//     bigPlayButton.classList.add('pause');
// });

// video.addEventListener('play', () => {
//     bigPlayButton.classList.remove('pause');
// });

video.addEventListener('click', () => {
    togglePlay();
});

progress.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, ${colorOne} 0%, ${colorOne} ${value}%, ${colorTwo} ${value}%, ${colorTwo} 100%)`;
    videoUpdate(value);
  })

