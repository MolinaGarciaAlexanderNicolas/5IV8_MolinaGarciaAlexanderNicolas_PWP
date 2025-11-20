/*
Vamos a cxrear un sirviente servidor para un crud 
para esto tenemos que probar si el modulo de mysql esta verificado, si no utilizaremos mysql2
 */

const express = require(`express`);
const mysql = require(`mysql2`);
const bodyParser = require(`body-parser`);
const ejs = require(`ejs`); 

const app = express();
const port = 3000;

const bd = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'n0m3l0',
    database: 'estudiantescecyt'
});

bd.connect((error) => {
    error ? console.log("conexion exitosa"): console.log('Conexion exitosa a la base de datos');
});

//tenemos que configurar nuestro mddleware el cual estarmeos usando rutas y codificacion de al informacion por json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//tenemos que configurar las vistas que se van a ejecutar
app.set('view engine', 'ejs');

//donde se encuentra el directorio de las vistas
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/css'))

//vamos a crear el crud de estudiantes a partir de rutas

//rutas para crear un estudiantes

app.get('/', (req, res) => {
  const query = 'SELECT * FROM estudiantes';
  bd.query(query, (error, results) => {
    if(error){
      console.log(error)
      res.status(500).send('Error al obtener los estudiantes')
    }else{
      res.render('index', {estudiantes: results})
    }
  });
  res.render('index')
});

app.post('/estudiantes', (req, res) => {
    //obtener los parametros del formulario
    const { nombre, edad, carrera } = req.body;
    const querry = `INSERT INTO estudiantes (nombre, edad, carrera) VALUES ('${nombre}', ${edad}, '${carrera}')";`;
    bd.query(querry, (error, resultados) => {
        if (error) {
            console.log('Error al crear el estudiante: ' + error);
            res.status(500).send('Error al crear el estudiante');
        }
        res.redirect('/');
    });
});

app.listen(port, () =>{
    console.log('Servidor corriendo en http://localhost:$(port');
})