'use strict'
import { Server } from "socket.io";

/////////////////////////
//     Interfaces     //
/////////////////////////

interface ServerToClientEvents {
}

interface ClientToServerEvents {
  hello: (a: string) => void;
  incremenetCount: (callback: (e: number) => void) => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

///////////////////
//     Setup     //
///////////////////

console.log('Starting server...');

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server, 
  {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  }
);

//const PORT = process.env.PORT || "3001";
const PORT = "3001";

let count = 0

app.get('/', (req: any, res: any) => {
  res.send("<h1>Server is running :)</h1>");
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//////////////////////////////
//     Socket.io Events     //
//////////////////////////////

// Never trust user input!

io.on('connection', (socket: any) => {
  console.log('a user connected');

  socket.on('hello', function(data: any) {
    console.log(data)
  })

  socket.on('incrementCount', (callback: Function) => {
    count = count + 1
    console.log('incrementing count: '+ count)
    callback(count)
  })
});

