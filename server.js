// ----- Import libraries -----

const moment = require('moment');
const http = require('http');

// ----- Define constants -----

const host = "localhost";
const port = 8080;

// Hora actual
let laHora = moment().format('LTS');


// ----- Create server -----

const server = http.createServer( (request, response) => {
    
    //console.log(request.url);
    
    if (request.url === "/") {

        // Http Headers
        response.writeHead(200, {
          'Content-Type' : 'text/html'
        });

        // Http Body
        response.write('<h1>¡Ya sé Node!</h1>');

        // Send http message
        response.end();
    }else if(request.url === "/hw"){
        // Http Headers
        response.writeHead(200, {
            'Content-Type' : 'text/html'
          });
  
          // Http Body
          response.write('<p style="color: orange">Happy Halloween!</p>');
  
          // Send http message
          response.end();
    }else if(request.url === "/myjson"){
        // Http Headers
        response.writeHead(200, {
            'Content-Type' : 'text/html'
          });
  
          // Http Body
          response.send({ "nombre": "Espagueti", "apellido": "Volador" });
  
          // Send http message
          response.end();
    }else if(request.url === "/timenow"){
        // Http Headers
        response.writeHead(200, {
            'Content-Type' : 'text/html'
          });
  
          // Http Body
          response.send(laHora);
  
          // Send http message
          response.end();
    }else{
        // Http Headers
        response.writeHead(404, {
            'Content-Type' : 'text/html'
          });
  
          // Http Body
          console.log('Estos son los androides que buscas')
  
          // Send http message
          response.end();
    }
});

// ----- Start server -----

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});