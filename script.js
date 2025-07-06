const form = document.getElementById("registroForm");
const btnEnviar = document.getElementById("btnEnviar");

// Campos
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confirmacion = document.getElementById("confirmacion");
const edad = document.getElementById("edad");

// Errores
const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorContrasena = document.getElementById("errorContrasena");
const errorConfirmacion = document.getElementById("errorConfirmacion");
const errorEdad = document.getElementById("errorEdad");

// Expresiones regulares
const correoRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

function validarFormulario() {
  let valido = true;

  // Nombre
  if (nombre.value.length < 3) {
    errorNombre.textContent = "Debe tener al menos 3 caracteres.";
    valido = false;
  } else {
    errorNombre.textContent = "";
  }

  // Correo
  if (!correoRegex.test(correo.value)) {
    errorCorreo.textContent = "Formato de correo inválido.";
    valido = false;
  } else {
    errorCorreo.textContent = "";
  }

  // Contraseña
  if (!passRegex.test(contrasena.value)) {
    errorContrasena.textContent = "Debe tener al menos 8 caracteres, un número y un carácter especial.";
    valido = false;
  } else {
    errorContrasena.textContent = "";
  }

  // Confirmación
  if (confirmacion.value !== contrasena.value) {
    errorConfirmacion.textContent = "Las contraseñas no coinciden.";
    valido = false;
  } else {
    errorConfirmacion.textContent = "";
  }

  // Edad
  if (parseInt(edad.value) < 18 || isNaN(parseInt(edad.value))) {
    errorEdad.textContent = "Debes ser mayor de edad.";
    valido = false;
  } else {
    errorEdad.textContent = "";
  }

  btnEnviar.disabled = !valido;
}

// Validaciones en tiempo real
[nombre, correo, contrasena, confirmacion, edad].forEach(campo =>
  campo.addEventListener("input", validarFormulario)
);

// Envío del formulario
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("¡Formulario validado correctamente!");
});
