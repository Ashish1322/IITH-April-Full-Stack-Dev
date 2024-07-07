import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Server } from "socket.io";

// add the environment variables
dotenv.config();

// import all the routes
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

// import socket controolers
import { sendMessage } from "./controllers/user.js";

// Creating server
const app = express();

// apply cors
app.use(cors());

// Add middlewares
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

// Connect to database
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    // Start the express server
    console.log("Database Connected");
    let serverPointer = app.listen(process.env.PORT || 3001, () =>
      console.log("Server is Running on Port ", process.env.PORT || 3001)
    );

    // WEB SOCKET SERVER
    const io = new Server(serverPointer, {
      cors: {
        origin: [process.env.frontedurl],
      },
    });

    io.on("connection", (socket) => {
      console.log("Client Connected", socket.id);

      socket.on("send-message", async (payload) => {
        const data = await sendMessage(
          payload.sender,
          payload.receiver,
          payload.message
        );

        io.emit(data.message.messageId, data.message);
      });

      socket.on("disconnect", () => {
        console.log("Client Disconnected");
      });
    });
  })

  .catch((err) => console.log("Unable to Connect to Database ", err));

export default app;
