//importa el modulo express y lo guarda en la variable express 
const express = require('express');

//crea una instancia de express 
const app = express();

//importa el modulo path, el cual se utiliza para acceder a las rutas de archivos
const path = require('path');

var port = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

//agregar midleware para parsear el body
app.use(express.json());

//definir ruta GET, cuando se recibe una solicitud HTTP GET en esa ruta, la funcion de callback se ejecuta.
app.get('/', (req, res) => {        
    //res.send('Web Server');
    res.sendFile(path.join(__dirname, 'public', "/index.html"));
});

// Creacion de un array de objetos llamado integrantes con la informacion de los integrantes del grupo
const integrantes = [
  {
    id:1,
    nombre:"Isaac",
    apellido:"Leon",
    biografia:"Nació en Cayambe-Ecuador el 26 de octubre de 2003. Realizó sus estudios secundarios en el Instituto Natalia Jarrin. Actualmente, cursa estudios de tercer nivel en la Escuela Politécnica Nacional como Tecnólogo de Desarrollo de Software."
  },
  {
    id:2,
    nombre:"Isabel",
    apellido:"Pazto",
    biografia:"Nació en Quito-Ecuador el 25 de abril de 2003. Realizo sus estudios primarios en la Escuela Fiscal Virginia Larenas y sus estudios secundarios en la Institución Educativa Fiscal Sucre. En la actualidad se halló cursando la Tecnología Superior en Desarrollo De Software en la Escuela Politécnica Nacional."
  },
  {
    id:3,
    nombre:"Marcelo",
    apellido:"Pinzon",
    biografia:"Nació en Quito-Ecuador el 19 de febrero de 2004, realicé mis estudios escolares desde 1° año hasta 6° año de básica en la Unidad Educativa “Rincón del Saber” y posteriormente en la Unidad Educativa “Luis Felipe Borja del Alcázar” de la cual me gradué con el título de Bachillerato en Ciencias. Actualmente, me encuentro cursando la carrera de Tecnología superior en Desarrollo de Software en la Escuela Politécnica Nacional."
  },
  {
    id:4,
    nombre:"Brandon",
    apellido:"Santacruz",
    biografia:"Nació en Quito-Ecuador el 27 de julio del 2000, realice mis estudios en el colegio Fiscal Conocoto, actualmente me encuentro estudiando la carrera en tecnologia de desarrollo de software en la Escuela Politecnica Nacional."
  }
]

// definir una ruta GET para que se presente la información de los integrantes del grupo
app.get('/integrantes',(req,res)=>{
  res.json(integrantes);
})

// definir ruta GET para que se presente la informacion de un integrante del grupo
app.get('/integrantes/:id',(req,res)=>{
  const {id} = req.params
  const integrante = integrantes.find((integrante)=>integrante.id==+id)
  integrante ? res.json(integrante) : res.status(404).send("Integrante no encontrado")
})

// definir ruta GET para ver los productos (datos quemados)
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'products.html'));
});

//escuchar el puerto 3000 y mostrar un mensaje en la consola
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});