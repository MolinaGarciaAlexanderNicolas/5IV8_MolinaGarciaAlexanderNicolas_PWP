function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8)return true;
    var patron = /[0-9\d]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function numeromayor(){
    var num1 = document.getElementById("numeros1").value;
    var num2 = document.getElementById("numeros2").value;
    var num3 = document.getElementById("numeros3").value;

    var n1 = parseInt(num1);
    var n2 = parseInt(num2);
    var n3 = parseInt(num3);

    if(n1 % 2 === 0)return alert("Ingresa un numero impar");
    if(n2 % 2 === 0)return alert("Ingresa un numero impar");
    if(n3 % 2 === 0)return alert("Ingresa un numero impar");

    var mayor = Math.max(n1, n2, n3);

    document.getElementById("numerom").value = mayor;
}