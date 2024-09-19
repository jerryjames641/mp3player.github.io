document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', function() {
        const audioSrc = this.parentElement.getAttribute('data-audio');
        const audioPlayer = document.getElementById('audioPlayer');

        if (audioPlayer.src !== audioSrc) {
            audioPlayer.src = audioSrc;
        }

        audioPlayer.play();
    });
});
