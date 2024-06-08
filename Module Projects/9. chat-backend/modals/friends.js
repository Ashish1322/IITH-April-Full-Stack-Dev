import mongoose from "mongoose";

const FriendSchem = new mongoose.Schema({
  sender: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "aprilchatusers",
  },
  receiver: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "aprilchatusers",
  },
});

export default mongoose.model("aprilchatfriends", FriendSchem);
