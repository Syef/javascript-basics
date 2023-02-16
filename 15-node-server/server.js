const http = require("http");
const server = http.createServer( (request,response) => {

    const names = [
        "syed",
        "hafeez",
        "sameer"
    ];

    const convertingNamesIntoString = JSON.stringify(names);
    
    response.writeHead(300);
    response.end(convertingNamesIntoString);


    // json.parse => it convert your string type array/object into original object/array
    // json.stringify  => it convert your array/object instance into plain string
});

server.listen(81, "localhost", () => {
    console.log(`Server is running on http://localhost:81`)
})