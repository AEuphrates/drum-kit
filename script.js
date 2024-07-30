document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => {
        playSound(button.getAttribute('data-sound'));
        animateButton(button.getAttribute('data-sound'));
    });
});

document.addEventListener('keydown', event => {
    const keyMap = {
        'KeyA': 'boom',
        'KeyS': 'clap',
        'KeyD': 'hihat',
        'KeyF': 'kick',
        'KeyG': 'openhat',
        'KeyH': 'ride',
        'KeyJ': 'snare',
        'KeyK': 'tink',
        'KeyL': 'tom'
    };
    const sound = keyMap[event.code];
    if (sound) {
        playSound(sound);
        animateButton(sound);
    }
});

function playSound(sound) {
    const audio = new Audio(`${sound}.wav`);
    audio.play();
}

function animateButton(sound) {
    const button = document.querySelector(`.drum[data-sound="${sound}"]`);
    if (button) {
        button.classList.add('active');
        setTimeout(() => button.classList.remove('active'), 100);
    }
}
