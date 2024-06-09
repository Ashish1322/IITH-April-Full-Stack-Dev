import mongoose from "mongoose";

const ChatSchem = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  sender: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "aprilchatusers",
  },
  receiver: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "aprilchatusers",
  },
  messageId: {
    type: String,
    required: true,
  },
});

export default mongoose.model("aprilchats", ChatSchem);
