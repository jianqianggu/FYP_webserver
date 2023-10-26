var express = require('express')
var app = express();
const router = express.Router();
const path = require('path');

var server = app.listen(4000, function(){
  console.log('Server running at http://127.0.0.1:4000/');
});

// Define the static resource (HTML/CSS/JS/images)
app.use(express.static(path.join(__dirname, 'public')));             // URL '/' (root) maps to 'public' directory

var publicPath = path.join(__dirname, 'public');


app.get('/', function (req, res) {
  res.sendfile(publicPath + '/pages/main.html');
});
