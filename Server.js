const reflect = require("reflect-metadata");
const JSON_TO_CSV = require("json2csv").parse;
const FileSystem = require("fs");
const express = require('express');
const app = express();

app.listen(3000, () => console.log('The converter has started'));

app.use(express.json());

const subscriberRouter = require('./routes/Transformer');
//the route will be like 'localhost:3000/raven/...'
app.use('/raven', subscriberRouter);