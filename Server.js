const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, () => console.log('The converter has started'));


app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

const subscriberRouter = require('./routes/Transformer');
//the route will be like 'localhost:3000/raven/...'
app.use('/raven', subscriberRouter);