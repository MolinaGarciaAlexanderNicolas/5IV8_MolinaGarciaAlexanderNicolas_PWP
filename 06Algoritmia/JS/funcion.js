function problema1(){
    var funcion = document.getElementById("p1-input").value;

    var resultado = funcion.split(/\s+/).reverse().join(" ");

    document.getElementById("p1-output").textContent = resultado;
}

function problema2(){
    //jimmy
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