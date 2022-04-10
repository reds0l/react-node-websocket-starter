import React from 'react';
import ReactDOM from 'react-dom/client';
import { io, Socket } from "socket.io-client";

////////////////////////
//     Interfaces     //
////////////////////////

interface ServerToClientEvents {
}

interface ClientToServerEvents {
  hello: (msg: string) => void;
  incrementCount: (callback: (count: number) => void) => void;
}

///////////////////////
//     Functions     //
///////////////////////

function sayHello(){
  console.log('sayHello called')
  socket.emit('hello', 'hello from client')
}

function incremenetCount() {
  socket.emit('incrementCount', (response) => {
    console.log("Count: "+ response)
  })
}

///////////////////
//     Setup     //
///////////////////

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:3001");
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <h1> Hello World 1 </h1>
    <button onClick={sayHello}> Send Hello </button>
    <button onClick={incremenetCount}> Increment Count </button>
  </React.StrictMode>,
);
