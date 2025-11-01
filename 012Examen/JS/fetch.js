document.getElementById("btn-oso").addEventListener("click", ()=> {

    const ancho = Math.floor(Math.random()*200) + 200;
    const alto = Math.floor(Math.random()*200) + 200;

    const url = `https://placebear.com/${ancho}/${alto}`;

    document.querySelector(".ososlook").src = url;
});