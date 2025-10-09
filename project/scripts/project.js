const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
const oLastModified = new Date(document.lastModified);
const formattedLastModified = oLastModified.toLocaleString();
document.getElementById("last-modified").innerHTML = formattedLastModified;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const datosInteresantes = [
    'The word "robot" is Czech: It was coined by Czech writer Karel Čapek, derived from the Slavic word "robota", meaning labor.',
    'A land of castles: With over 2,000 castles and chateaux, the Czech Republic has one of the highest densities of castles in the world.',
    'The worlds oldest astronomical clock: Prague of Old Town is home to the oldest working astronomical clock, the Orloj, dating back to 1410.',
    'Inventors of soft contact lenses: The Czech Republic is the birthplace of several important inventions, including the soft contact lens.',
    'The average Czech drinks over 150 liters of beer per year. In many Czech pubs and restaurants, tap beer is actually cheaper than bottled water.',
    'The peaceful "Velvet Divorce": The separation of Czechoslovakia into the Czech Republic and Slovakia in 1993 was a rare and remarkably peaceful event, known as the "Velvet Divorce".'
];

function mostrarDato(boton) {
    // Selecciona el contenedor del botón actual
    const contenedor = boton.closest('.burbuja-contenedor');
    const contenido = contenedor.querySelector('.burbuja-contenido');

    // Alternar visibilidad
    const estaVisible = contenido.classList.contains('mostrar');

    if (estaVisible) {
        contenido.classList.remove('mostrar');
    } else {
        // Elegir un dato aleatorio
        const indiceAleatorio = Math.floor(Math.random() * datosInteresantes.length);
        contenido.textContent = datosInteresantes[indiceAleatorio];

        // Mostrar la burbuja
        contenido.classList.add('mostrar');
    }
}