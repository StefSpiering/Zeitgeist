"use strict";

const db = firebase.firestore();

const coleccionStr = "contacto";

const onInsert = (objeto) => db.collection(coleccionStr).doc().set(objeto);

// Seleccionar el botón por su etiqueta 'button' y tipo 'submit'
const button = document.querySelector('button[type="submit"]');

button.addEventListener("click", async function (event) {
  event.preventDefault();
  console.log("Botón clickeado!");

  const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("message").value;

  if (!nombre || !email || !mensaje) {
    Swal.fire({
      title: "Error!",
      text: "Todos los campos son requeridos",
      icon: "error",
    });
    return; // Detener la ejecución si hay campos vacíos
  }

  const contacto = { nombre, email, mensaje };

  console.log(contacto);
  await onInsert(contacto);
  Swal.fire({
    title: "Enviado!",
    text: "Mensaje enviado correctamente",
    icon: "success",
  });
  borrar();
});

function borrar() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}