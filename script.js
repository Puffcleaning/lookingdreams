// Establece la fecha de cuenta regresiva (3 de abril de 2024)
var fechaCuentaRegresiva = new Date("Apr 3, 2024 00:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
var x = setInterval(function() {
    // Obtiene la fecha y hora de hoy
    var ahora = new Date().getTime();
    
    // Encuentra la distancia entre ahora y la fecha de cuenta regresiva
    var distancia = fechaCuentaRegresiva - ahora;
    
    // Calcula tiempo para días, horas, minutos y segundos
    var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
        document.getElementById("cuenta-regresiva").innerHTML = "¡La cuenta regresiva ha terminado!";
    }
}, 1000);



