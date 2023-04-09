const adivinanzas = [
  {
    pregunta: "Perteneciente al reino de los hongos (8 letras): M_ C _ _ _ _ A",
    respuesta: "micotina",
    mensaje: "Busca en el fondo del mueble del lavaplatos",
    html: `
        <h2>Pregunta 1</h2>
        <p>Perteneciente al reino de los hongos  </br> (8 letras) </br> M _ C _ _ _ N A</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit" id="botonEnviar">Enviar</button>
        </form>
      `,
  },
  {
    pregunta: "Orificio del oído interno que controla el equilibrio y la audición  </br> (6 letras) <br> _ E _ _ _ B U _ O",
    respuesta: "vestíbulo",
    mensaje: "Busca detras del trono del Ludo",
    html: `
        <h2>Pregunta 2</h2>
        <p>Orificio del oído interno que controla el equilibrio y la audición  </br> (6 letras) <br> _ E _ _ _ B U _ O</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit" id="botonEnviar">Enviar</button>
        </form>
      `,
  },
  {
    pregunta: "Término utilizado en matemáticas para referirse a una figura geométrica que tiene todos sus lados y ángulos iguales (8 letras) <br> E _ _ _ L _ _ O",
    respuesta: "equilátero",
    mensaje: "Busca en el fondo de la última caja de plástico del comedor",
    html: `
        <h2>Pregunta 3</h2>
        <p>"Término utilizado en matemáticas para referirse a una figura geométrica que tiene todos sus lados y ángulos iguales <br> (8 letras) <br> E _ _ _ L _ _ O"</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit" id="botonEnviar">Enviar</button>
        </form>
      `,
  },
  {
    pregunta: "País europeo que limita con Rusia y Letonia (7 letras) <br> _ _ _ O _ _ A",
    respuesta: "estonia",
    mensaje: "Busca en la caja de Zelda",
    html: `
        <h2>Pregunta 4</h2>
        <p>País europeo que limita con Rusia y Letonia <br> (7 letras) <br> _ _ _ O _ _ A</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit" id="botonEnviar">Enviar</button>
        </form>
      `,
  },
  {
    pregunta: "Nombre de mi actor BL thai favorito (8) <br> _ h _ P _ _ _ T",
    respuesta: "Ohm Pawat",
    mensaje: "Buesca en mi ukelele",
    html: `
        <h2>Pregunta 5</h2>
        <p>Nombre de mi actor BL thai favorito (8) <br> _ h _ P _ _ _ T</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit" id="botonEnviar">Enviar</button>
        </form>
      `,
  },
  {
    pregunta: "Nombre de mi grupo de múscia asiatica favorito en todo el mundo universal (Nombre completo en el idioma original) (Sin pistas porque deberías saber)",
    respuesta: "ずっと真夜中でいいのに",
    mensaje: "Busca en el fondo del saco de dormir",
    html: `
        <h2>Pregunta 6</h2>
        <p>Nombre de mi grupo de múscia asiatica favorito en todo el mundo universal (Nombre completo en el idioma original) <br> (Sin pistas porque deberías saber)</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit" id="botonEnviar">Enviar</button>
        </form>
      `,
  },
];

const contenedorAdivinanzas = document.querySelector("#contenedor-adivinanzas");
const resultado = document.querySelector("#resultado");
let indiceAdivinanzaActual = 0;

// Funciones
function mostrarAdivinanza(adivinanza) {
  contenedorAdivinanzas.innerHTML = adivinanza.html;
  const formulario = contenedorAdivinanzas.querySelector("form");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const respuesta = event.target.querySelector("input").value.toLowerCase();
    if (respuesta === adivinanza.respuesta.toLowerCase()) {
      contenedorAdivinanzas.innerHTML +=
        "<p id=texto-resultado>Respuesta correcta!</p>";
      contenedorAdivinanzas.innerHTML +="<div id='box-respuesta'><p id=texto-resultado>" + adivinanza.mensaje + "</p></div>";
      contenedorAdivinanzas.innerHTML +=
        "<img src='michi-feliz.jpg' width=150px >";
      contenedorAdivinanzas.innerHTML += "<button id=siguiente>Siguiente</button>";
      const botonSiguiente = contenedorAdivinanzas.querySelector("#siguiente");
      botonSiguiente.addEventListener("click", siguienteAdivinanza);
      const botonEnviar = contenedorAdivinanzas.querySelector("#botonEnviar");
      botonEnviar.style.display = "none";
      const input = contenedorAdivinanzas.querySelector("input");
      input.style.display = "none";
      const p = contenedorAdivinanzas.querySelector("p");
      p.style.display = "none";
      indiceAdivinanzaActual++; // aumentar el índice de la adivinanza actual
    } else {
      contenedorAdivinanzas.innerHTML +=
        "<p id=texto-resultado>Respuesta incorrecta, inténtalo de nuevo.</p>";
      contenedorAdivinanzas.innerHTML +=
        "<img src='michi-triste.jpg' width=150px >";
        const botonEnviar = contenedorAdivinanzas.querySelector("#botonEnviar");
        botonEnviar.addEventListener("click", function (event) {
          event.preventDefault();
          mostrarAdivinanza(adivinanza);
        });
      botonEnviar.innerHTML = "Intenta nuevamente";
      const input = contenedorAdivinanzas.querySelector("input");
      input.style.display = "none";
      const p = contenedorAdivinanzas.querySelector("p");
      p.style.display = "none";
    }
  });
}

function siguienteAdivinanza() {
  if (indiceAdivinanzaActual < adivinanzas.length) {
    mostrarAdivinanza(adivinanzas[indiceAdivinanzaActual]);
  } else {
    contenedorAdivinanzas.innerHTML =
      "<p>¡Todas las preguntas han sido resueltas!</p>";
      contenedorAdivinanzas.innerHTML +=
        "<img src='michi-victoria.jpg' width=150px >";
  }
}

function mostrarPantallaInicio() {
  contenedorAdivinanzas.innerHTML = `
    <h1 id="h1-inicio">¡Empezemos la búsqueda de páscua!</h1>
    <img src='michi-de-pascua.png' width="250px">
    <p id=text-inicio>Presiona el botón para empezar</p>
    <button id="botonInicio">Iniciar</button>
  `;
  const botonInicio = contenedorAdivinanzas.querySelector("#botonInicio");
  botonInicio.addEventListener("click", siguienteAdivinanza);
}

// Iniciar el juego
mostrarPantallaInicio();