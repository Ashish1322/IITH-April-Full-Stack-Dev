import express from "express";

const router = express.Router();

// controllers
import {
  sendFriendRequest,
  allFriends,
  allMessages,
  updateProfilePhoto,
} from "../controllers/user.js";

// middlewares
import { isLoggedIn } from "../middlewares/auth.js";

// import mutler upload
import { upload } from "../middlewares/multer.js";

router.post("/request", isLoggedIn, sendFriendRequest);
router.get("/friends", isLoggedIn, allFriends);
router.get("/messages/:receiverId", isLoggedIn, allMessages);
router.post(
  "/update/profile",
  isLoggedIn,
  upload.single("profile"),
  updateProfilePhoto
);
export default router;
