// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hoy te vuelvo a besar escondidas", time: 22 },
  { text: "Nuevamente las horas medidas", time: 24 },
  { text: "Han pasado no sé cuanto tiempo", time: 27 },
  { text: "Desde aquel, nuestro último encuentro", time: 30 },
  { text: "Como aire que toca tu pelo", time: 33 },
  { text: "Como lluvia que dejas caer", time: 36 },
  { text: "Así soy para ti en los momentos", time: 39 },
  { text: "Que deseo volverte a tener", time: 42 },
  { text: "Y me siento un juguete en tus brazos", time: 45 },
  { text: "Y al mirarte pierdo la razón", time: 48 },
  { text: "Y me vuelvo a enredar en tu cuerpo", time: 51 },
  { text: "Y me ahogo en el mar de tu amor", time: 54 },
  { text: "siempre seré ", time: 56 },
  { text: "Quien te calme tus deseos de amar", time: 59 },
  { text: "Pero nunca llegaré imaginar", time: 62 },
  { text: "Lo profundo de tu alma, de tu corazón", time: 65 },
  { text: "Siempre seré", time: 68 },
  { text: "La ternura que despierta pasión", time: 69 },
  { text: "Sin llegar a ser jamás la ilusión", time: 74 },
  { text: "Ese amor fascinante que te enamoró", time: 76 },
  { text: "Luis, te amo mi niño <3", time: 80 },
  { text: "Luis, te amo mi niño <3", time: 83 },
  { text: "Luis, te amo mi niño <3", time: 85 },
  { text: "Luis, te amo mi niño <3", time: 87},

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
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