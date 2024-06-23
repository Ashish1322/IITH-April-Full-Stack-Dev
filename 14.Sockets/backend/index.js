import express from "express";
import { Server } from "socket.io";
const app = express();

const instance = app.listen(3002, () => console.log("Server Started"));

const io = new Server(instance, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

io.on("connection", (socket) => {
  console.log("client Connected", socket.id);

  socket.on("greeting-message", (data) => {
    console.log("Data Recieved from Client ", data);
    socket.emit("server-response", data);
  });
});
