import express from "express";

const router = express.Router();
// import controlelrs
import {
  login,
  signup,
  verifyEmail,
  getAllUsers,
} from "../controllers/auth.js";
// impprt middlewares
import { isLoggedIn } from "../middlewares/auth.js";

// Auth Routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/users", isLoggedIn, getAllUsers);
router.get("/verify-account/:token", verifyEmail);

export default router;
