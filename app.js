const express = require('express');
const mongodb = require('mongodb');
const connectMongoDb = require('./util/database').connectMongoDb;
const productRoutes = require('./routes/product');
//const getproductRoutes = require('./routes/getProducts');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/products', productRoutes);


connectMongoDb(() => {
    app.listen(3000);
    console.log('successfully connected to MongoDB');
  });

