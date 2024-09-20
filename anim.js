// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tu sabes que me cuesta verte asi", time: 53 },
  { text: "Asi que no paso ni un minuto sin pensar", time: 57 },
  { text: "En ti", time: 62 },
  { text: "Tu sabes que detesto recordar", time: 65 },
  { text: "Que sufres como humano,siendo tan angelical", time: 69 },
  { text: "Y sabes cuanto odio verte mal", time: 76 },
  { text: "Si tu risa es tan bonita", time: 81 },
  { text: "¿Para qué la vas a guardar?", time: 84 },
  { text: "Y sabes que yo solo quiero estar", time: 88 },
  { text: "Contigo para siempre", time: 93 },
  { text: "Pa ayudarte superar", time: 94 },
  { text: "No estes triste", time: 100 },
  { text: "No estes triste,amor", time: 101 },
  { text: "Ven y vamos a otra parte", time: 105 },
  { text: "A escaparnos del dolor", time: 107 },
  { text: "No estes triste", time: 110 },
  { text: "No estes triste,amor", time: 114 },
  { text: "Que te juro que contenta", time: 116 },
  { text: "Te ves mucho mejor", time: 120 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);