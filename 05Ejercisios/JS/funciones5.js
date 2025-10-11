function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true; 
    var patron = /[0-9\d]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularPorcentaje() {
    var hombres = parseInt(document.getElementById("hombres").value);
    var mujeres = parseInt(document.getElementById("mujeres").value);

    if (hombres < 0) return alert("El valor debe ser mayor a 0");
    if (mujeres < 0) return alert("El valor debe ser mayor a 0");

    var total = hombres + mujeres;

    var porcHombres = (hombres / total) * 100;
    var porcMujeres = (mujeres / total) * 100;

    document.getElementById("porcHombres").value = porcHombres.toFixed(2) + " %";
    document.getElementById("porcMujeres").value = porcMujeres.toFixed(2) + " %";
}

function borrarf() {
    document.getElementById("hombres").value = "";
    document.getElementById("mujeres").value = "";
    document.getElementById("porcHombres").value = "";
    document.getElementById("porcMujeres").value = "";
}