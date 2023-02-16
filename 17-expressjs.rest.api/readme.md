### ExpressJs Rest APIs

#### introduction to REST APIs
REST (Respresentation State Transfer) APIs are a standert for building APIs
REST APIs use HTTP METHODS
- GET
- post
- put
- Delete
to interact with resources represented by URIs
REST APIs can return data is different format
- JSON 
- XML
- HTML
- ByteArray

But JSON is a most common format

### instruction

1. initialize Project for Node Enviroment
```
npm init
```
2. install Express package
``` 
npm install express
```

3. To Handle JSON Request/ Response 

install body-parse library
``` 
npm install body-parser
```

in Express.js you can handle JSON playload in you API by
adding **The `body-parser` middlewere to your application.
**The `body parser` middlewere allows you to parse JSON data in the request body**_

4. Create Express Application 

```javascript
const express = require("express")
const app = express();
```
5. Apply `bodyParser` middleware to express app

```javascript
const bodyParser = require("body-parser");
app.use(bodyParser.json())
```

6. Create/Listen Server on specific 
PORT

```javascript
const SERVER_PORT = 3000:
const onServerStart = function() {
    console.log(`Server running on http://localhost:${SERVER_PORT})`);
};

app.listen(SERVER_PORT, onServerStart)
```
### Routing in ExpressJs

Route is a specific endpoint in your application that defines the behavior
for a particular URL. You can define routes using the `app.get()`
method, which is used to handle 
HTTP GET requests

```javascript
app.get('/', (request, response) => {
    response.send("Hello,World!")
});
```
- GET Request

``` 
const USER_ENDPOINT = "/users";
const apiHandler = (req,res) => {
    res.json({success: true})
}

app.get(USER_ENDPOINT,ApiHandler)
```
- **POST** Request

```
const USER_ENDPOINT = "/users";
app.post(USER_ENDPOINT, function(request,response){

});
```

- **Put** Request

```
const USER_ENDPOINT = "/users/:id"; //id is request param
app.put(USER_ENDPOINT, function(request,response){
const userID = request.params.id;
});
```
- **Delate** Request

```
const USER_ENDPOINT = "/users/:id"; //id is request param
app.put(USER_ENDPOINT, function(request,response){
const userID = request.params.id;
});
```

### user APIs

1. Create (Create a new user through **POST** API)
2. Read (Get user details through **GET** API)
3. Update (Update users details through **PUT** API)
4. Delate (Remove user from the system through **DELETE** API)

![](https://miro.medium.com/max/1400/
1*2eBdh0vLZjUyCDF6x1EqvQ.png)