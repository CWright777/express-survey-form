var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request,res){
  res.render("index");
})

app.post('/result', function(req,res){
  var user_info = {
    name: req.body.name,
    location: req.body.location,
    language: req.body.language,
    comment: req.body.comment
  }
  res.render("result",{user_info: user_info})
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
