console.log('Starting server...');

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

//const PORT = process.env.PORT || "3001";
const PORT = "3001";

app.get('/', (req: any, res: any) => {
  res.send("<h1>Hello World 2</h1>");
});

io.on('connection', (socket: any) => {
  console.log('a user connected');
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});