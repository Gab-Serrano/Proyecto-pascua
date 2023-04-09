const adivinanzas = [
  {
    pregunta: "Adivinanza 1: ¿Qué cosa es que al crecer se achica?",
    respuesta: "un agujero",
    html: `
        <h2>Adivinanza 1</h2>
        <p>¿Qué cosa es que al crecer se achica?</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit">Enviar</button>
        </form>
      `,
  },
  {
    pregunta: "Adivinanza 2: ¿Qué cosa es que mientras más grande menos se ve?",
    respuesta: "oscuridad",
    html: `
        <h2>Adivinanza 2</h2>
        <p>¿Qué cosa es que mientras más grande menos se ve?</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit">Enviar</button>
        </form>
      `,
  },
  {
    pregunta:
      "Adivinanza 3: En el agua nado yo, en el agua me hundo yo, pero al fuego no me acerco yo. ¿Qué soy?",
    respuesta: "el hielo",
    html: `
        <h2>Adivinanza 3</h2>
        <p>En el agua nado yo, en el agua me hundo yo, pero al fuego no me acerco yo. ¿Qué soy?</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit">Enviar</button>
        </form>
      `,
  },
  {
    pregunta:
      "Adivinanza 4: Con letras tres te nombro, con una te añoro, y aunque no te pueda ver, eres la estrella que me guía. ¿Quién eres tú?",
    respuesta: "Dios",
    html: `
        <h2>Adivinanza 4</h2>
        <p>Con letras tres te nombro, con una te añoro, y aunque no te pueda ver, eres la estrella que me guía. ¿Quién eres tú?</p>
        <form>
          <input type="text" placeholder="Escribe tu respuesta">
          <button type="submit">Enviar</button>
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
      resultado.innerHTML = "<p>¡Respuesta correcta!</p>";
    } else {
      resultado.innerHTML = "<p>Respuesta incorrecta, inténtalo de nuevo.</p>";
    }
    setTimeout(function () {
      resultado.innerHTML = "";
      siguienteAdivinanza();
    }, 2000);
  });
}

let indiceAdivinanzaActual = 0;

function siguienteAdivinanza() {
  if (indiceAdivinanzaActual < adivinanzas.length) {
    mostrarAdivinanza(adivinanzas[indiceAdivinanzaActual]);
    indiceAdivinanzaActual++;
  } else {
    contenedorAdivinanzas.innerHTML =
      "<p>¡Todas las adivinanzas han sido resueltas!</p>";
  }
}

siguienteAdivinanza();
