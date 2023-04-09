const adivinanzas = [
  {
    pregunta: "Perteneciente al reino de los hongos (8 letras): M_ C _ _ _ _ A",
    respuesta: "micotina",
    mensaje: "Busca debajo del cajón de tus pantalones",
    html: `
        <h2>Pregunta 1</h2>
        <p>Perteneciente al reino de los hongos (8 letras </br>M _ C _ _ _ N A</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit" id="botonEnviar">Enviar</button>
        </form>
      `,
  },
  {
    pregunta: "Adivinanza 2",
    respuesta: "Respuesta 2",
    mensaje: "Busca detras del trono del",
    html: `
        <h2>Adivinanza 2</h2>
        <p>Adivinanza 2</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit" id="botonEnviar">Enviar</button>
        </form>
      `,
  },
  {
    pregunta: "Adivinanza 3",
    respuesta: "Respuesta 3",
    html: `
        <h2>Adivinanza 3</h2>
        <p>Adivinanza 3</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit" id="botonEnviar">Enviar</button>
        </form>
      `,
  },
  {
    pregunta: "Adivinanza 4",
    respuesta: "Respuesta 4",
    html: `
        <h2>Adivinanza 4</h2>
        <p>Adivinanza 4</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit" id="botonEnviar">Enviar</button>
        </form>
      `,
  },
];

const contenedorAdivinanzas = document.querySelector("#contenedor-adivinanzas");
const resultado = document.querySelector("#resultado");

function mostrarAdivinanza(adivinanza) {
  contenedorAdivinanzas.innerHTML = adivinanza.html;
  const formulario = contenedorAdivinanzas.querySelector("form");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const respuesta = event.target.querySelector("input").value.toLowerCase();
    if (respuesta === adivinanza.respuesta.toLowerCase()) {
      contenedorAdivinanzas.innerHTML +=
        "<p id=texto-resultado>Respuesta correcta!</p>";
      contenedorAdivinanzas.innerHTML +='<p id=texto-resultado>' + adivinanza.mensaje + '</p>';
      contenedorAdivinanzas.innerHTML +=
        "<img src=michi-feliz.jpg width=150px >";
      contenedorAdivinanzas.innerHTML += "<button id=siguiente>Siguiente</button>";
      const botonSiguiente = contenedorAdivinanzas.querySelector("#siguiente");
      botonSiguiente.addEventListener("click", siguienteAdivinanza);
      const botonEnviar = contenedorAdivinanzas.querySelector("#botonEnviar");
      botonEnviar.style.display = "none";
      const input = contenedorAdivinanzas.querySelector("input");
      input.style.display = "none";
      const p = contenedorAdivinanzas.querySelector("p");
      p.style.display = "none";

    } else {
      contenedorAdivinanzas.innerHTML +=
        "<p id=texto-resultado>Respuesta incorrecta, inténtalo de nuevo.</p>";
      contenedorAdivinanzas.innerHTML +=
        "<img src=michi-triste.jpg width=150px >";
      const botonEnviar = contenedorAdivinanzas.querySelector("#botonEnviar");
      botonEnviar.innerHTML = "Intenta nuevamente";
      const input = contenedorAdivinanzas.querySelector("input");
      input.style.display = "none";
      const p = contenedorAdivinanzas.querySelector("p");
      p.style.display = "none";
    }
  });
}

let indiceAdivinanzaActual = 0;

function siguienteAdivinanza() {
  if (indiceAdivinanzaActual < adivinanzas.length) {
    mostrarAdivinanza(adivinanzas[indiceAdivinanzaActual]);
    indiceAdivinanzaActual++;
  } else {
    contenedorAdivinanzas.innerHTML =
      "<p>¡Todas las preguntas han sido resueltas!</p>";
  }
}

siguienteAdivinanza();
