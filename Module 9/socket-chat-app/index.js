const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log('a user connected');
  socket.broadcast.emit("connection", "a user connected");
  socket.emit("new connection", "welcome");

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
    socket.broadcast.emit("disconnection", "a user disconnected")
  });
});



server.listen(3000, () => {
  console.log("listening on *:3000");
});
