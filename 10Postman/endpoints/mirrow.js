const mirrow =(req, res) =>{
    const methods=[{
        method: 'POST',
        hashbody: true,
        purpouse: "El metodo post se utiliza para enviar una entidad, "
    },
    {
        method: 'PUT',
        hashbody: true,
        purpouse: "El metodo put, remplaza las representaciones actuales"
    },
    {
        method: 'PATCH',
        hashbody: true,
        purpouse: "El metodo patch es utilizado par aplicar modificaciones parciales a un recurso "
    },{
        method: 'HEAD',
        hashbody: false,
        purpouse: "El metodo head pide un a respuesta identica a la de una peticion a get, pero sin el cuerpo de la respuesta"
    },
    {
        method: 'GET',
        hashbody: false,
        purpouse: "El metodo get solicita una respuesta de un recurso especifico. Las peticiones que usan el metodo get solo deben resuperar datos"
    },
    {
        method: 'DELETE',
        hashbody: false,
        purpouse: "El metodo delete elimina el resurso especificado"
    },
    ]

    const requestMethod = methods.find(
        m => m.method === req.method) || {
            method: req.method,
            hasbody: false,
        };  
    requestMethod.purpouse+= requestMethod.hasbody ? "Tiene cuerpo" : "No tien cuerpo";
    if(requestMethod.hasbody){
        req.body;
        res.json({...req.body, ruta_consumida: req.route.path, ...requestMethod});
    }else{
        res.json({ruta_consumida: req.originalUrl, ...requestMethod});
    }
}

module.exports = mirrow;