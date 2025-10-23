const { response } = require('express');
var http = require('http');

//vamos a crear nuestro prvar servidor 
var servidor = http.createServer(function(req, res){
    //req -> requestev es una solucitud, viene por parte de la arquitectura cliente servidor, todos los clientes (navegadores, usuarios, app),
    //son los que realizan una peticion 

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});//2000 e sel cod
    response.write('<h1>Hola Mundo desde Node.js<h1>');
    response.write('<h1>HOLAAAA<h1>');
    console.log('Hola si entro al servidor')
    res.end();
});

servidor.listen(3000);

console.log('Servidor ejecutandose en http://localhost:3000');