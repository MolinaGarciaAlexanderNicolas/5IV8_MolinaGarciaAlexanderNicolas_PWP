function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8)return true;
    var patron = /[0-9\d.]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function horasextras(){
    var noho = document.getElementById("nohoras").value;
    var paho = document.getElementById("pagohora").value;

    var no = parseFloat(noho);
    var pao = parseFloat(paho);

    let pagtol = 0;
    let hoex = 0;

    if(no <= 40)return alert("No hay horas extras que pagar");

    if(no > 40){
        hoex = no - 40;
    }

    if(hoex <= 8){
        pagtol = (40 * pao) + (hoex * pao * 2);
    }else{
        const extrdobl = 8;
        const extrtrip = hoex - 8;
        pagtol = (40 * pao) + (extrdobl * pao * 2) + (extrtrip * pao * 3);
    }

    document.getElementById("hre").value = pagtol;
}