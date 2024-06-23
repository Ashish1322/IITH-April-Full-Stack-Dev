import User from "../modals/user.js";
import Friends from "../modals/friends.js";
import Chats from "../modals/chats.js";

export const sendFriendRequest = async (req, res) => {
  try {
    const { email } = req.body;

    // 1. Check if user exists with this email
    const receiver = await User.findOne({ email });
    if (!receiver) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }

    // 2. What if sender and receiver are same
    if (receiver._id == req.user._id) {
      return res.status(400).json({
        success: false,
        message: "You cannot send request to yourself",
      });
    }
    // 3. If he/she is already your friend
    const alreadyFrienObj = await Friends.findOne({
      $or: [
        {
          sender: req.user._id,
          receiver: receiver._id,
        },
        {
          sender: receiver._id,
          receiver: req.user._id,
        },
      ],
    });

    if (alreadyFrienObj) {
      return res.status(400).json({
        success: false,
        message: "User is already in the friend list.",
      });
    }

    // Make them friend by adding document in the colletion
    const friend = new Friends({
      sender: req.user._id,
      receiver: receiver._id,
    });
    await friend.save();

    return res
      .status(200)
      .json({ success: true, message: "User added to your friendlist" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const allFriends = async (req, res) => {
  try {
    const friends = await Friends.find({
      $or: [
        {
          sender: req.user._id,
        },
        {
          receiver: req.user._id,
        },
      ],
    }).populate("sender receiver", "name email imgUrl");

    return res.status(200).json({ success: true, friends });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// It's not a web Api controller it will be called by socket
export const sendMessage = async (senderId, receiverId, message) => {
  try {
    let newChat = new Chats({
      sender: senderId,
      receiver: receiverId,
      message: message,
      messageId:
        senderId > receiverId ? senderId + receiverId : receiverId + senderId,
    });

    await newChat.save();

    return { success: true, message: newChat };
  } catch (err) {
    return { success: false, message: err };
  }
};

export const allMessages = async (req, res) => {
  try {
    const { receiverId } = req.params;

    const combinedId =
      req.user._id > receiverId
        ? req.user._id + receiverId
        : receiverId + req.user._id;
    const messages = await Chats.find({ messageId: combinedId });

    return res.status(200).json({ success: true, chats: messages });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const updateProfilePhoto = async (req, res) => {
  if (req.file) {
    await User.findByIdAndUpdate(req.user._id, {
      imgUrl: req.file.location,
    });
    return res.status(200).json({
      success: true,
      message: "File Uploaded Successfully",
      imgUrl: req.file.location,
    });
  } else {
    return res
      .status(500)
      .json({ success: false, message: "Unable to Upload File" });
  }
};
