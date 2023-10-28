var express = require('express')
var app = express();
const http = require('http');
const server = http.Server(app);
const io = require('socket.io')(server); 
const path = require('path');

// Define the static resource (HTML/CSS/JS/images)
app.use(express.static(path.join(__dirname, 'public')));             // URL '/' (root) maps to 'public' directory

var publicPath = path.join(__dirname, 'public');


app.get('/', function (req, res) {
  res.sendfile(publicPath + '/pages/main.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on("sw changed", (arg) => {
    var arr = arg
    console.log(arg);
    io.emit(toString(arr))
  });
});

server.listen(4000, '10.245.87.244', () => 
  console.log('listening on *http://10.245.87.244:4000/')
);