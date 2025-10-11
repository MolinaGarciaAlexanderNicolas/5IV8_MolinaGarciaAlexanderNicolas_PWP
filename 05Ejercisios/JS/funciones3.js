function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d.]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularDescuento(){
    var pro = document.getElementById("producto").value;
    var pre = document.getElementById("precio").value;

    if(!pro)return alert("Ingrese el nombre del producto");
    
    var pren = parseFloat(pre);

    if(pren < 20 || pren > 1000000)return alert("Ingrese un precio en el rango de 20 a 1 millon");

    var desc = pren*(0.15);
    var tot = pren - desc;

    document.getElementById("verProducto").value = pro;
    document.getElementById("verPrecio").value = "$ " + pren;
    document.getElementById("verDescuento").value = "$ " + desc;
    document.getElementById("verTotal").value = "$ " + tot;
}

function borrarf() {
    document.getElementById("producto").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("verProducto").value = "";
    document.getElementById("verPrecio").value = "";
    document.getElementById("verDescuento").value = "";
    document.getElementById("verTotal").value = "";
}