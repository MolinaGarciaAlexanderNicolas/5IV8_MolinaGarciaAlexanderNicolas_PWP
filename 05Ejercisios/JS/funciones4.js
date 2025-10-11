function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true; 
    var patron = /[0-9\d.]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularCalificacion() {
    var C1 = parseFloat(document.getElementById("C1").value);
    var C2 = parseFloat(document.getElementById("C2").value);
    var C3 = parseFloat(document.getElementById("C3").value);
    var TF = parseFloat(document.getElementById("TF").value);
    var EF = parseFloat(document.getElementById("EF").value);

    if (C1 < 0 || C1 > 10) return alert("Ingrese la calificacion del primer periodo, del rango del 1 al 10");
    if (C2 < 0 || C2 > 10) return alert("Ingrese la calificacion del segundo periodo, del rango del 1 al 10");
    if (C3 < 0 || C3 > 10) return alert("Ingrese la calificacion del tercer periodo, del rango del 1 al 10");
    if (TF < 0 || TF > 10) return alert("Ingrese la calificacion del trabajo final, del rango del 1 al 10");
    if (EF < 0 || EF > 10) return alert("Ingrese la calificacion del examen final, del rango del 1 al 10");

    var promedioParciales = (C1 + C2 + C3) / 3;
    var pesoParciales = promedioParciales * 0.55;
    var pesoTF = TF * 0.15;
    var pesoEF = EF * 0.30;
    var calificacionFinal = pesoParciales + pesoTF + pesoEF;

    document.getElementById("totalCalificacion").value = calificacionFinal;
}

function borrarf() {
    document.getElementById("C1").value = "";
    document.getElementById("C2").value = "";
    document.getElementById("C3").value = "";
    document.getElementById("TF").value = "";
    document.getElementById("EF").value = "";
    document.getElementById("totalCalificacion").value = "";
}