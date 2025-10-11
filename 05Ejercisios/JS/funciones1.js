function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8)return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

//funcion para calcular el interes
function interes(){
    var valor = document.getElementById("cantidadi").value;
    var meses = document.getElementById("mes").value;

    
    var parseo = parseFloat(valor);
    alert(parseo);
    if(parseo < 100 || parseo > 10000000)return alert("Ingresa una cantidad en el rango de 100 a 100 millones de pesos");
    var month = parseInt(meses);
    alert(month);
    if(month < 3 || month > 18)return alert("El mes debe de estar dentro del rango de 3 a 18 meses");
    var interes = parseo*(0.02)*(month);//LIMITE A DOS DECIMALES
    alert(interes);
    var total = interes + parseo;
    alert(total);
    document.getElementById("saldoi").value = "$ " + total;//LIMITE A DOS DECIMALES
}

function borrarf(){
    document.getElementById("saldoi").value = " ";
    document.getElementById("cantidadi").value = " ";
    document.getElementById("mes").value = " ";
}