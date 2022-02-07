const video = document.querySelector('.video-player');
const bigPlayButton = document.querySelector('.play-hover');
const poster = document.querySelector('.poster');
const playButton = document.querySelector('.play-button');
const progress = document.querySelector('#progress');
const muteButton = document.querySelector('.mute-button');
const volume = document.querySelector('#volume');
let tempVolume = 0.5;

const whiteColor = getComputedStyle(document.documentElement)
.getPropertyValue('--white');
const goldColor = getComputedStyle(document.documentElement)
.getPropertyValue('--gold');

function togglePlay() {
    poster.classList.add('fade');
    if (video.paused) {
        video.play();
        bigPlayButton.classList.add('pause');
        playButton.classList.add('pause');
        updateProgressBar();
    }
    else {
        video.pause();
        bigPlayButton.classList.remove('pause');
        playButton.classList.remove('pause');
    }
}

function updateVideoProgress(number) {
    video.currentTime = number / 100 * video.duration;
}

function updateProgressBar() {
    while (!video.paused) {
        setInterval(() => {
            var value = Math.round(+video.currentTime/+video.duration*100);
            progress.style.background = `linear-gradient(to right, ${goldColor} 0%, ${goldColor} ${value}%, ${whiteColor} ${value}%, ${whiteColor} 100%)`;
            progress.value = value;
            }, 100);
            return;
    }
}

poster.addEventListener('click', togglePlay);

video.addEventListener('click', () => {
    togglePlay();
});

progress.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, ${goldColor} 0%, ${goldColor} ${value}%, ${whiteColor} ${value}%, ${whiteColor} 100%)`;
    updateVideoProgress(value);
  });

volume.addEventListener('input', function() {
    if (video.volume == 0) {
        muteButton.classList.remove('muted');
    }
    const value = this.value;
    if (value == 0) {
        muteButton.classList.add('muted');
    }
    this.style.background = `linear-gradient(to right, ${goldColor} 0%, ${goldColor} ${value}%, ${whiteColor} ${value}%, ${whiteColor} 100%)`;
    video.volume = this.value / 100;
})

muteButton.addEventListener('click', function() {
    if (!this.classList.contains('muted')) {
        tempVolume = video.volume;
        video.volume = 0;
    }
    else {
        video.volume = tempVolume;
    }
    this.classList.toggle('muted');
})

video.volume = 0.5;

