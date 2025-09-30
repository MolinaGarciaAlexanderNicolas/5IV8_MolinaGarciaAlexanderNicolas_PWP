/*
 Javascript es un lenguaje multiparadigma 
 Acepta la programacion funcional, estructurada, POO, Eventos
 Dentro de Javascipt, no existe el typado de variables
 int, string, etc

 Solo existen tres tipos de variables de acuerdo al estandar ES6
 VAR, LET, CONST
 */

 function validar(formulario){
    //quiero validar que el campo nombre acepte mas de tres caracteres
    if(index.nombre.value.length < 4){
        alert("Por Favor escribe mas de tres caracteres en campo nombre");
        formulario.nombre.focus();
        return false;
    }

    //validaCION PARa unicamente letras
    var checkStr = index.nombre.value


    var abcOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm" + " ";

    var allValido = true;

    //tenemos que comparar la cadena de nombre vs el abc
    for(var i = 0; i < checkStr.length; i++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValido = false;
            break;
        }
    }
    if(!allValido){
        alert("Escriba unicamenente letras");
        index.nombre.focus();
        return false;
    }



    var checkStr = index.edad.value


    var abcOK = "0123456789";

    var allValido = true;

    //tenemos que comparar la cadena de nombre vs el abc
    for(var i = 0; i < checkStr.length; i++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValido = false;
            break;
        }
    }
    if(!allValido){
        alert("Escriba unicamenente numeros");
        index.edad.focus();
        return false;
    }


    //vamos a crear un funcion de una expresion regular para validar el correr

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    var txt = index.correo.value;

    alert("Email " + (b.test(txt)? " ": " no ") + "valido");
    return b.test(txt);
 }