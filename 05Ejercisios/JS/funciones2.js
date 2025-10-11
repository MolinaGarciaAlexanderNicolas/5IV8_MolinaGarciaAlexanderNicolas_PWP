function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8)return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularComision(){
    var suel = document.getElementById("sueldo").value;
    var ven1 = document.getElementById("venta1").value;
    var ven2 = document.getElementById("venta2").value;
    var ven3 = document.getElementById("venta3").value;

    var base = parseFloat(suel);
    alert(base);
    if(base < 1500 || base > 50000)return alert("Ingrese un sueldo dentro del rango de 1500 a 50 mil pesos")
    var v1 = parseFloat(ven1);
    alert(v1);
    if(v1 < 50 || v1 > 200)return alert("Ingrese las ventas dentro del rango de 50 a 200 ventas")
    var v2 = parseFloat(ven2);
    alert(v2);
    if(v2 < 50 || v2 > 200)return alert("Ingrese las ventas dentro del rango de 50 a 200 ventas")
    var v3 = parseFloat(ven3);
    alert(v3);
    if(v3 < 50 || v3 > 200)return alert("Ingrese las ventas dentro del rango de 50 a 200 ventas")
    

    var com1 = v1*(0.10);
    alert(com1);
    var com2 = v2*(0.10);
    alert(com2);
    var com3 = v3*(0.10);
    alert(com3);
    var comt = com1 + com2 + com3;
    alert(comt);
    var tomes = base + comt;
    alert(tomes);

    document.getElementById("comision").value = "$ " + comt;
    document.getElementById("total").value = "$ " + tomes;
    }

function borrarf(){
    document.getElementById("sueldo").value = "";
    document.getElementById("venta1").value = "";
    document.getElementById("venta2").value = "";
    document.getElementById("venta3").value = "";
    document.getElementById("comision").value = "";
    document.getElementById("total").value = "";
}