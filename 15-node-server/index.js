// HTTP server Module
// NodeJS InBuild Module(http)

import { createServer } from "http";

// const server = http.CreateServer(function (request, response){
   // response.writeHead(200);
    //response.end("data serve from node server")});

const requestListener = function(request,response) {
    response.writeHead(200);
    response.end("Data from node server");
}

const server = createServer(requestListener);

server.listen(80, 'localhost', () => {
    console.log(`Server is running...`)
});

//browser -> localhost
// Terminal -> curl localhost

//server Stop -> CTRL + c