function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8)return true;
    var patron = /[0-9\d]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function operacion(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;

    var n1 = parseInt(num1);
    var n2 = parseInt(num2);

    if(n1 == n2){
        var res = n1*n2;

        document.getElementById("numerom").value = res;
    }

    if(n1 > n2){
        var res = n1 - n2;

        document.getElementById("numerom").value = res;
    }

    if(n2 > n1){
        var res = n2 + n1;

        document.getElementById("numerom").value = res;
    }
}