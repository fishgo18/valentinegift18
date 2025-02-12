const messages = [
    "Are you sure babe?",
    "Really sure CACAAA??",
    "Are you serious?",
    "Pookie please...",
    "Just think about it darlingg!",
    "If you say no, I will be really sad and die now...",
    "I will be very sad really...",
    "I will be very very very sad and depressed...",
    "Ok fine, I will stop asking now...",
    "Just kidding, say yes please now! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "https://fishgo18.github.io/valentinegift1818/";
}

document.getElementById('playMusic').addEventListener('click', function () {
    const audio = document.getElementById('linkmp3');
    audio.play();
});
