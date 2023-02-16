// Expressjs is framework (external library)
// we need to download in from NPM registry
const fs = require('fs');
// 2. npm install express 
const express = require("express");
const bodyParser = require("body-parser");
const { request } = require('http');
const { response } = require('express');

const app = express();

// define app to use bodyParser middleware
// Handling JSON payload requests
app.use(bodyParser.json());

function getFileData(path) {
    const data = fs.readFileSync(path);
    const json = JSON.parse(data);
    return json;
}


// const productsData = fs.readFileSync("..//15-node-server/data/products.json"); // buffer
// const products = JSON.parse(productsData);

const DATA_FOLDER = "../15-node-server/data"
const products = getFileData(`${DATA_FOLDER}/products.json`);
const categories = getFileData(`${DATA_FOLDER}/categories.json`);

const handleCategories = function (request,response){
    response.json(categories)
};
app.get("/", function(req,res) {
    res.send("Express app is running...")
});

app.get("/products",(request,response) => {
    response.json(products);
});



app.get("/categories", handleCategories);

app.get("/products/:productID", (req,res) => {
    const productId = req.params.productID; 
    const product = products.find(p => p.id === parseInt(productId));

    if(!product){
      res.json({
        error: true,
        message: `NO PRODUCT FOUND with ID ${productId}`
      })
    } else {
        res.json(product);
    }
    
});
/*
app.post("/categories", (req,res) => {

    const categoryName = `category` + categories.length;
    console.log(categoryName); //category 4
    categories.push(categoryName);

    console.log("Checking For Request Body");
    console.log(req.body);

    res.send({success:true, newCategoty: categoryName})

    });
    */
   app.post("/add-category",(request, response) => {
    const requestBody = request.body;// { "category": "NEW_CATEGORY_NAME"}
    console.log("Request body ,requestBody");
    const category = requestBody.category;

    if (category) {
        // Inserting new user provided category to categories array
        categories.push(category);

        response.send({
            success: true,
            message: `New ${category} added`,
            count: category.length
        });
    } else {
        response.send({
            success: false,
            error: `Please provide category name`
        });
    }
   });

app.listen(3000,() => {
    console.log(`Server listening on port http://localhost:3000` )
})