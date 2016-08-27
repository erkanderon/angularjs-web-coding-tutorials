var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");


//-----CORS------

/*var whiteList = {
    "http://localhost:3000": true,
    "http://localhost:8080": true
};

var allowCrossDomain = function(req, res, next) {    
        if(whiteList[req.headers.origin]){            
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Control-Allow-Origin', req.headers.origin);
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Origin, Accept');        
            next();
        } 
};

app.use(allowCrossDomain);*/
//app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//----CORS end---

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 


var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}
var id = 4;

app.get('/deleteUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + 2];
       
      //console.log( data );
      res.end( JSON.stringify(data));
   });
	
})

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      //console.log( data );
      res.end( data );
   });
})

app.post('/listUsers', function (req, res, next) {
  //console.log(req.body);
  //res.json(req.body);
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data[Object.keys(req.body)[0]] = req.body[Object.keys(req.body)[0]];
      console.log( data );
      res.end( JSON.stringify(data));
      fs.writeFile( __dirname + "/" + "users.json", JSON.stringify(data), function(err,data){});
   });
  
});
/*app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})*/
app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      //console.log( user );
      res.end( JSON.stringify(user));
   });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});