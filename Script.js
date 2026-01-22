const cards = document.querySelectorAll(".card"); // first card only
const audio = document.getElementById("audio");

cards.forEach(cardio=>{
    cardio.addEventListener("click", ()=>{
    const Songsrc = cardio.dataset.song;
    audio.src = Songsrc;
    audio.play();
})
})