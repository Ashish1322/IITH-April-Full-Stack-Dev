import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Import database pointers
import User from "./modals/user.js";

// Creating server
const app = express();

// Add middlewares
app.use(express.json());

app.post("/auth/signup", async (req, res) => {
  try {
    const { name, email, password, gender } = req.body;

    // check the password length
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password should be minimum 8 length",
      });
    }
    // Try to find a single doucment with the given email
    const alreadyExistingUser = await User.findOne({ email });
    if (alreadyExistingUser != null) {
      return res
        .status(400)
        .json({ success: false, message: "Email already in use" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword, gender });
    await newUser.save();

    return res.status(200).json({ success: true, message: "Account Created" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user == null) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return res.status(200).json({ success: true, message: "Login Success" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: err });
  }
});

app.get("/auth/users", async (req, res) => {
  try {
    let data = await User.find();
    return res.status(200).json({ success: true, users: data });
  } catch (err) {
    return res.status(500).json({ success: false, message: err });
  }
});

// Connect to database
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1"
  )
  .then(() => {
    // Start the express server
    console.log("Database Connected");
    app.listen(3001, () => console.log("Server is Running on Port 3001"));
  })
  .catch((err) => console.log("Unable to Connect to Database ", err));
