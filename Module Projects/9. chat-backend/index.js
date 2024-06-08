import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// add the environment variables
dotenv.config();

// import all the routes
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

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
    app.listen(3001, () => console.log("Server is Running on Port 3001"));
  })
  .catch((err) => console.log("Unable to Connect to Database ", err));
