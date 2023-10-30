var express = require('express')
var app = express();
const http = require('http');
const server = http.Server(app);
const io = require('socket.io')(server); 
const path = require('path');

// Define the static resource (HTML/CSS/JS/images)
app.use(express.static(path.join(__dirname, 'public')));             // URL '/' (root) maps to 'public' directory

var publicPath = path.join(__dirname, 'public');
var arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

app.get('/data', function(req, res) {
  res.json(arr);
  console.log('esp request')
});

app.get('/', function (req, res) {
  res.sendfile(publicPath + '/pages/main.html');
});

io.on('connection',  (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on("sw changed", (arg) => {
    arr = arg
    console.log(arg);
    io.emit("update",arr)
  });
  socket.on("iot", (arg) => {
    console.log(arg);
  });
});


const ip = "10.245.87.244"; // Access the system variable SERVER_IP

server.listen(4000, ip, () => {
  console.log(`listening on http://${ip}:4000/`);
});