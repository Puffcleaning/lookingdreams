// Establece la fecha de cuenta regresiva (3 de abril de 2024)
var fechaCuentaRegresiva = new Date("Apr 3, 2024 00:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
var x = setInterval(function () {
  // Obtiene la fecha y hora de hoy
  var ahora = new Date().getTime();

  // Encuentra la distancia entre ahora y la fecha de cuenta regresiva
  var distancia = fechaCuentaRegresiva - ahora;

  // Calcula tiempo para días, horas, minutos y segundos
  var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Muestra el resultado en los elementos con id="dias", id="horas", id="minutos", id="segundos"
  // y agrega texto para días, horas, minutos y segundos
  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;

  // Si la cuenta regresiva termina, muestra un mensaje
  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("cuenta-regresiva").innerHTML =
      "¡La cuenta regresiva ha terminado!";
  }
}, 1000);

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Inicializa EmailJS con tu API key pública
      emailjs.init("ooKBOkLJ2xA-zMv_4"); // <-- Asegúrate de reemplazar "tu_api_key_publica" con tu clave pública real

      var forms = document.getElementsByClassName("needs-validation");
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Previene el envío predeterminado

    if (this.checkValidity()) {
      // Intenta enviar el formulario con EmailJS
      emailjs.sendForm("service_8q0ecmb", "template_fsmo7r9", this).then(
        function () {
          Swal.fire({
            title: "¡Enviado!",
            text: "¡Pronto nos pondremos en contacto contigo!",
            icon: "success",
            customClass: {
              formulario: "alertaEnvio",
            },
          }).then(function (result) {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        },
        function (error) {
          Swal.fire({
            title: "Error",
            text: "Tu mensaje no pudo ser enviado. " + error.text,
            icon: "error",
          });
        }
      );
    } else {
      // Muestra un mensaje de error si el formulario no es válido
      this.classList.add("was-validated");
      Swal.fire({
        title: "Error",
        text: "Por favor, completa el formulario correctamente antes de enviar.",
        icon: "error",
      });
    }
  });
