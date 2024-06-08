import express from "express";

const router = express.Router();

// controllers
import { sendFriendRequest, allFriends } from "../controllers/user.js";

// middlewares
import { isLoggedIn } from "../middlewares/auth.js";

router.post("/request", isLoggedIn, sendFriendRequest);
router.get("/friends", isLoggedIn, allFriends);

export default router;
