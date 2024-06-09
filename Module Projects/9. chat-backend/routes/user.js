import express from "express";

const router = express.Router();

// controllers
import {
  sendFriendRequest,
  allFriends,
  allMessages,
} from "../controllers/user.js";

// middlewares
import { isLoggedIn } from "../middlewares/auth.js";

router.post("/request", isLoggedIn, sendFriendRequest);
router.get("/friends", isLoggedIn, allFriends);
router.get("/messages/:receiverId", isLoggedIn, allMessages);

export default router;
