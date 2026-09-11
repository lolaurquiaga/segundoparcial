// Array de objetos con los datos curiosos
const curiosidades = [
    { texto: "Rafael Lozano-Hemmer es un artista mexicano-canadiense especializado en instalaciones interactivas en espacios públicos." },
    { texto: "Su obra combina tecnología avanzada como sensores biométricos, robótica y datos en tiempo real." },
    { texto: "En su proyecto Vectorial Elevation, ciudadanos controlaban reflectores gigantes a través de internet." },
    { texto: "Pulse Room es una instalación que traduce los latidos cardíacos de los visitantes en pulsos de luz." },
    { texto: "Su trabajo explora la relación entre el cuerpo humano, la tecnología y la vigilancia." },
    { texto: "Ha expuesto sus obras en más de 70 países alrededor del mundo." },
    { texto: "Lozano-Hemmer estudió ingeniería antes de dedicarse al arte, lo que influye en su enfoque tecnológico." },
    { texto: "Sus instalaciones suelen involucrar la participación activa del público para activar la obra." },
    { texto: "Fue ganador del prestigioso premio Ars Electronica por su innovador uso de tecnología en arte." },
    { texto: "Utiliza la luz como lenguaje poético para explorar temas de identidad, memoria y presencia." }
];

// Selección con querySelector
const textoCurioso = document.querySelector("#curioso-texto");
const botonCurioso = document.querySelector("#btnCurioso");

// Función para mostrar un dato curioso al azar
function mostrarCuriosidad() {
    const indice = Math.floor(Math.random() * curiosidades.length);
    textoCurioso.textContent = curiosidades[indice].texto;
}

// Evento para el botón
botonCurioso.addEventListener("click", mostrarCuriosidad);
