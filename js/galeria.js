// Array de objetos con las obras
const obras = [
    { nombre: "Pulse Room", anio: 2006, imagen: "img/pulseRoom.jpg" },
    { nombre: "Vectorial Elevation", anio: 1999, imagen: "img/vectorialElevation.jpg" },
    { nombre: "Body Movies", anio: 2001, imagen: "img/bodyMovies.jpg" },
    { nombre: "33 Questions per Minute", anio: 2000, imagen: "img/33QuestionsPerMinute.jpg" },
    { nombre: "Voz Alta", anio: 2008, imagen: "img/vozAlta.jpg" },
    { nombre: "Solar Equation", anio: 2010, imagen: "img/solarEquation.jpg" },
    { nombre: "Pan-Anthem", anio: 2015, imagen: "img/panAnthem.jpg" },
    { nombre: "Level of Confidence", anio: 2015, imagen: "img/levelOfConfidence.jpg" },
    { nombre: "Vicious Circular Breathing", anio: 2013, imagen: "img/viciousCircularBreathing.jpg" },
    { nombre: "Border Tuner", anio: 2019, imagen: "img/borderTuner.jpg" }
];

// Selecciona el contenedor de la galería
const contenedor = document.querySelector(".galeria-contenedor");

// Recorre el array y genera dinámicamente cada obra
obras.forEach(obra => {
    const item = document.createElement("div");
    item.classList.add("obra-item");

    item.innerHTML = `
        <img src="${obra.imagen}" alt="${obra.nombre}">
        <h3>${obra.nombre}</h3>
        <p>Año: ${obra.anio}</p>
    `;

    contenedor.appendChild(item); // Agrega el elemento al contenedor de la galería
});

// Botón para cambiar diseño
const boton = document.getElementById("cambiar-diseno");
if (boton) {
    boton.addEventListener("click", () => {
        contenedor.classList.toggle("galeria-alternativa");
    });
}
