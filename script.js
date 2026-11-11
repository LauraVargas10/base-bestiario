const listaFacciones = [
  {
    nombre: "Abnegación",
    imagen: "assets/img/abnegacion.png",
    color: "abnegacion",
    virtud: "Altruismo",
    descripcion: "Creen que el egoísmo es el origen de los problemas humanos. Por eso, ponen las necesidades de los demás por encima de las propias. Son humildes, discretos y viven para servir.",
    principio: "Pensar primero en los demás.",
  },
  {
    nombre: "Osadía",
    imagen: "assets/img/osadia.jpg",
    color: "osadia",
    virtud: "Valentía",
    descripcion: "Consideran que el miedo y la cobardía impiden construir una sociedad justa. Valoran el coraje, la libertad, la fuerza y la capacidad de enfrentar los propios temores.",
    principio: "Actuar con valentía, incluso cuando tienes miedo.",
  },
  {
    nombre: "Erudición",
    imagen: "assets/img/erudicion.png",
    color: "erudicion",
    virtud: "Conocimiento",
    descripcion: "Creen que la ignorancia es la causa de los conflictos. Valoran la inteligencia, la ciencia, la investigación, el pensamiento lógico y el aprendizaje.",
    principio: "El conocimiento permite transformar el mundo.",
  },
  {
    nombre: "Verdad",
    imagen: "assets/img/verdad.png",
    color: "verdad",
    virtud: "Honestidad",
    descripcion: "Consideran que la mentira y el engaño son el origen de los conflictos. Por eso, defienden la sinceridad absoluta, la transparencia y la justicia, aunque decir la verdad resulte incómodo.",
    principio: "La verdad está por encima de las apariencias.",
  },
  {
    nombre: "Cordialidad",
    imagen: "assets/img/cordialidad_logo.png",
    color: "cordialidad",
    virtud: "Paz",
    descripcion: "Creen que la agresividad y los enfrentamientos destruyen la sociedad. Valoran la armonía, la cooperación, la empatía, la alegría y la convivencia pacífica.",
    principio: "Buscar la paz y resolver los conflictos sin violencia.",
  },
];
const opcionesOraculo = [
  ...listaFacciones,
  {
    nombre: "Divergente",
    imagen: "assets/img/divergente.jpg",
    color: "divergente",
    descripcion: "No perteneces a una sola facción.",
  },
];

const faccion = document.getElementById("faccion");
const boton = document.getElementById("boton");
const botonDivergente = document.getElementById("botonDivergente");
const resultado = document.getElementById("resultado");
const etiquetaResultado = document.getElementById("etiquetaResultado");
const nombreResultado = document.getElementById("nombreResultado");
const virtudResultado = document.getElementById("virtudResultado");
const descripcionResultado = document.getElementById("descripcionResultado");
const principioResultado = document.getElementById("principioResultado");

function mostrarResultado(nombre, imagen, color, etiqueta, descripcion, virtud = "", principio = "") {
  faccion.src = imagen;
  faccion.alt = nombre;
  etiquetaResultado.textContent = etiqueta;
  nombreResultado.textContent = nombre;
  virtudResultado.textContent = virtud ? `Virtud: ${virtud}` : "";
  virtudResultado.hidden = !virtud;
  descripcionResultado.textContent = descripcion;
  principioResultado.textContent = principio ? `Su principio: ${principio}` : "";
  principioResultado.hidden = !principio;
  resultado.className = `resultado resultado--${color}`;
  resultado.hidden = false;
}

boton.addEventListener("click", () => {
  const indiceAleatorio = Math.floor(Math.random() * opcionesOraculo.length);
  const faccionElegida = opcionesOraculo[indiceAleatorio];
  const nombre = faccionElegida.nombre === "Divergente"
    ? "Eres Divergente"
    : `Eres de ${faccionElegida.nombre}`;
  mostrarResultado(
    nombre,
    faccionElegida.imagen,
    faccionElegida.color,
    "Tu facción",
    faccionElegida.descripcion,
    faccionElegida.virtud,
    faccionElegida.principio,
  );
});

botonDivergente.addEventListener("click", () => {
  const primerIndice = Math.floor(Math.random() * listaFacciones.length);
  let segundoIndice = Math.floor(Math.random() * (listaFacciones.length - 1));
  if (segundoIndice >= primerIndice) segundoIndice += 1;

  const primeraFaccion = listaFacciones[primerIndice];
  const segundaFaccion = listaFacciones[segundoIndice];
  const nombre = `Divergente: ${primeraFaccion.nombre} + ${segundaFaccion.nombre}`;

  mostrarResultado(
    nombre,
    "assets/img/divergente.jpg",
    "divergente",
    "Tu naturaleza no cabe en una sola facción",
    `Tu perfil combina ${primeraFaccion.nombre} y ${segundaFaccion.nombre}.`,
  );
});
