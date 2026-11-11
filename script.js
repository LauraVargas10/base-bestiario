const listaFacciones = [
  "assets/img/cordialidad_logo.png",
  "assets/img/divergente.jpg",
  "assets/img/erudicion.png",
  "assets/img/osadia.jpg",
  "assets/img/verdad.png",
];

const faccion = document.getElementById("faccion");
const boton = document.getElementById("boton");

function generarFaccion() {
  const indiceAleatorio = Math.floor(Math.random() * listaFacciones.length);
  faccion.src = listaFacciones[indiceAleatorio];
}

boton.addEventListener("click", function () {
  generarFaccion();
});

generarFaccion();
