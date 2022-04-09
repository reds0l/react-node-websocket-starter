import React from 'react';
import ReactDOM from 'react-dom/client';
import io from "socket.io-client";

const socket = io("ws://localhost:3001")
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <h1> Hello World 1 </h1>
    <button> Get Count </button>
    <br></br>
    <button> Increment Count </button>
  </React.StrictMode>,
);
