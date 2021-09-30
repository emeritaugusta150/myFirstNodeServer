// ----- Import libraries -----

const moment = require('moment');
const http = require('http');
const fs = require('fs');

// ----- Define constants -----

const host = "localhost";
const port = 8080;

// Hora actual
let laHora = moment().format('k:m:s');
let laFecha = moment().format('D:MM:YYYY');


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

        fs.appendFile('requests.log', `${laFecha} ${laHora} - /\n`, (err)=>{if (err) throw err;});
    }else if(request.url === "/hw"){
        // Http Headers
        response.writeHead(200, {
            'Content-Type' : 'text/html'
          });
  
          // Http Body
          response.write('<p style="color: orange">Happy Halloween!</p>');
  
          // Send http message
          response.end();

          fs.appendFile('requests.log', `${laFecha} ${laHora} - /hw\n`, (err)=>{if (err) throw err;});
    }else if(request.url === "/myjson"){
        // Http Headers
        response.writeHead(200, {
            'Content-Type' : 'application/json'
          });
  
          // Http Body
          response.write(JSON.stringify({ "nombre": "Espagueti", "apellido": "Volador" }));
  
          // Send http message
          response.end();

          fs.appendFile('requests.log', `${laFecha} ${laHora} - /myjson\n`, (err)=>{if (err) throw err;});
    }else if(request.url === "/timenow"){
        // Http Headers
        response.writeHead(200, {
            'Content-Type' : 'text/html'
          });
  
          // Http Body
          response.write(laHora);
  
          // Send http message
          response.end();

          fs.appendFile('requests.log', `${laFecha} ${laHora} - /timenow\n`, (err)=>{if (err) throw err;});
    }else if(request.url === "/web"){
        fs.readFile('public/index.html', (error, data)=>{
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(data);
            response.end();   
        });
        fs.appendFile('requests.log', `${laFecha} ${laHora} - /web\n`, (err)=>{if (err) throw err;});
    }else if(request.url === "/img"){
        fs.readFile('public/images/unnamed.png', (error, data)=>{
            response.writeHead(200, {'Content-Type' : 'image/png'});
            response.write(data);
            response.end();
        });
        fs.appendFile('requests.log', `${laFecha} ${laHora} - /img\n`, (err)=>{if (err) throw err;});
    }else{
        // Http Headers
        response.writeHead(404, {
            'Content-Type' : 'text/html'
          });
  
          // Http Body
          response.write('Recurso no encontrado');
          // Send http message
          response.end();

          fs.appendFile('requests.log', `${laFecha} ${laHora} - 404\n`, (err)=>{if (err) throw err;});
    }
});

// ----- Start server -----

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});