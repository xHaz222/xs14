// Reproductor de música
const playPauseButton = document.getElementById("play-pause-btn");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const audio = document.getElementById("audio");

let isPlaying = false;

playPauseButton.addEventListener("click", function() {
  if (isPlaying) {
    audio.pause();
    playPauseButton.innerHTML = "►";
  } else {
    audio.play();
    playPauseButton.innerHTML = "❚❚";
  }
  isPlaying = !isPlaying;
});

// Funciones para cambiar canciones
prevButton.addEventListener("click", function() {
  // Cambia al anterior (aquí puedes agregar la lógica de tu lista de reproducción)
  audio.src = "https://www.youtube.com/watch?v=ssVCtZBQyus"; // Reemplaza con el siguiente link
  audio.play();
});

nextButton.addEventListener("click", function() {
  // Cambia al siguiente (aquí puedes agregar la lógica de tu lista de reproducción)
  audio.src = "https://youtu.be/mm29aBe71SI?si=3P_AcZ0jZb7mcRs2"; // Reemplaza con el siguiente link
  audio.play();
});
