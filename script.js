// 1. Seleccionar elementos del DOM
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const tbody = document.getElementById("tabla-registros");

// 2. Estado: let porque el valor cambia
let likes = 0;

// 3. Escuchar el clic
boton.addEventListener("click", () => {
  likes++;
  textoContador.textContent = likes;

  // Hora en formato HH:MM:SS
  const ahora = new Date();
// Obtiene la hora actual en formato HH:MM:SS
const hora = [ahora.getHours(), ahora.getMinutes(), ahora.getSeconds()]
  .map(n => String(n).padStart(2, "0"))
  .join(":");

  // Crear la fila con dos celdas
  const fila = document.createElement("tr");
  const celdaNum = document.createElement("td");
  const celdaHora = document.createElement("td");
  celdaNum.textContent = likes;
  celdaHora.textContent = hora;
  fila.append(celdaNum, celdaHora);

  // Insertar al inicio para que lo más reciente quede arriba
  tbody.prepend(fila);
});