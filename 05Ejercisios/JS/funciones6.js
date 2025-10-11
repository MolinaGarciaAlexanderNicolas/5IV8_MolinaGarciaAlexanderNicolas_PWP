function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true; 
    var patron = /[0-9\d]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularEdad(){
    var aNacimiento = parseInt(document.getElementById("aNacimiento").value);
    var aActual = new Date().getFullYear();

    if(!aNacimiento)return alert("Ingrese una fecha de nacimiento valida");

    if(isNaN(aNacimiento))return alert("Ingrese unna fecha valida");

    var edad = aActual - aNacimiento;

    document.getElementById("edad").value = edad + " años";
}

function borrarf() {
    document.getElementById("aNacimiento").value = "";
    document.getElementById("edad").value = "";
}