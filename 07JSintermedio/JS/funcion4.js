function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8)return true;
    var patron = /[0-9\d.]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularUtilidad() {
    var salarioInput = document.getElementById("salario").value;
    var antiguedadInput = document.getElementById("antiguedad").value;

    var salario = parseFloat(salarioInput);
    var antiguedad = parseFloat(antiguedadInput);
    var utilidad = 0;
    var porcentaje = 0;

    if (antiguedad < 1) {
        porcentaje = 0.05;
    } else if (antiguedad >= 1 && antiguedad < 2) {
        porcentaje = 0.07;
    } else if (antiguedad >= 2 && antiguedad < 5) {
        porcentaje = 0.10;
    } else if (antiguedad >= 5 && antiguedad < 10) {
        porcentaje = 0.15;
    } else {
        porcentaje = 0.20;
    }

    utilidad = salario * porcentaje;

    document.getElementById("utilidad").value = utilidad;
}