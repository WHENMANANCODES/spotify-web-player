const cards = document.querySelectorAll(".card"); // first card only
const audio = document.getElementById("audio");

let currsong = null;
cards.forEach(cardio=>{
    cardio.addEventListener("click", ()=>{
    const icon = cardio.querySelector("i");
    const Songsrc = cardio.dataset.song;
    //same song clicked
    if(currsong === Songsrc){
        if(audio.paused){
            icon.classList.replace("fa-play","fa-pause");
            icon.classList.add("pausebtn");
            audio.play();
            
           
        }
        else{
            icon.classList.replace("fa-pause","fa-play");
            icon.classList.remove("pausebtn");
            audio.pause();
            
        }
    } 
   // different song clicked
    else{
        currsong = Songsrc;
        audio.src = Songsrc;
        icon.classList.replace("fa-play","fa-pause");
        icon.classList.add("pausebtn");
        audio.play();
      
    }

})
})