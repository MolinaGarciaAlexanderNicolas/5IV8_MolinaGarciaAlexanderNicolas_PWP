function problema1(){
    var funcion = document.getElementById("p1-input").value;

    var resultado = funcion.split(/\s+/).reverse().join(" ");

    document.getElementById("p1-output").textContent = resultado;
}

function problema2(){
    //jimmy
    var p2_x1 = document.querySelector("#p2_x1").value;
    var p2_x2 = document.querySelector("#p2_x2").value;
    var p2_x3 = document.querySelector("#p2_x3").value;
    var p2_x4 = document.querySelector("#p2_x4").value;
    var p2_x5 = document.querySelector("#p2_x5").value;

    var p2_y1 = document.querySelector("#p2_y1").value;
    var p2_y2 = document.querySelector("#p2_y2").value;
    var p2_y3 = document.querySelector("#p2_y3").value;
    var p2_y4 = document.querySelector("#p2_y4").value;
    var p2_y5 = document.querySelector("#p2_y5").value;

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];

    v1 = v1.sort(function(a, b){return b-a});
    v2 = v2.sort(function(a, b){return b-a});

    v2 = v2.reverse();

    var p2_producto = 0;

    for(var i = 0; i<v1; i++){
        p2_producto == v1[i] * v2[i];
    }

    document.querySelector("#p2_resutado").textContent = "El producto escalar es minimo es: " + p2_producto;
}

function problema3(){
    let entrada = document.getElementById("p3-input").value;

    let palabras = entrada.split(",").map(p => p.trim().toUpperCase());

    let pM = "";
    let maxLetras = 0;

    for (let palabra of palabras) {
    let soloL = palabra.replace(/[^A-Z]/g, "");
    let letras = new Set(soloL.split(""));
    let cantidad = letras.size;
    if (cantidad > maxLetras) {
    maxLetras = cantidad;
    pM = soloL;
        }
    }
    document.getElementById('p3-output').textContent = maxLetras;
}