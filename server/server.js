var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
var s3FileUpload = require('./s3Upload');
console.log(s3FileUpload)
app.use('/', s3FileUpload.routes);
app.listen(port,function(err){
  if(err){
   console.log(" DB Error: ",err);
 }else{
   console.log('Port connected',port);
 }
});