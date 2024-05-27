//importa el modulo express y lo guarda en la variable express 
const express = require('express');

//crea una instancia de express 
const app = express();

//importa el modulo path, el cual se utiliza para acceder a las rutas de archivos
const path = require('path');

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

//agregar midleware para parsear el body
app.use(express.json());

//definir ruta GET, cuando se recibe una solicitud HTTP GET en esa ruta, la funcion de callback se ejecuta.
app.get('/', (req, res) => {        
    //res.send('Web Server');
    res.sendFile(path.join(__dirname, 'public', "/index.html"));
});

// definir una ruta GET para solicitudes de pedidos

// definir ruta GET para ver los productos (datos quemados)
app.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'products.html'));
});

//escuchar el puerto 3000 y mostrar un mensaje en la consola
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});