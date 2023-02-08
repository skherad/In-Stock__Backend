//Good Luck everyone! lets crush this project together!

//Import list
const express = require("express");
const serverless = require("serverless-http")
const app = express()
const cors = require("cors");   
require('dotenv').config()
const {PORT} = process.env || 8080;
//Import routes
const warehouseRoutes = require('./routes/warehouseRoute');
const inventoryRoutes = require('./routes/inventoryRoute');

//Middleware
app.use(cors())
app.use(express.json()); // to get request body
app.use(express.static('public')); // to get images as static files

//Routes
app.use("/.netlify/functions/index/warehouse", warehouseRoutes);
app.use("/.netlify/functions/inventory", inventoryRoutes);


module.exports.handler = serverless(app)

// app.listen(8080, () =>{
//     // console.log(`Running on port ${PORT}....`)
//     console.log('To kill API press CTRL + C')
// })