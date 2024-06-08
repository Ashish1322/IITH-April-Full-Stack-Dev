import User from "../modals/user.js";
import Friends from "../modals/friends.js";
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
          reciever: req.user._id,
        },
      ],
    });
    return res.status(200).json({ success: true, friends });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
