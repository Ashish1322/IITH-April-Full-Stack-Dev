import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

// Import database pointers
import User from "../modals/user.js";

async function signup(req, res) {
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

    // once the user is saved we have to send one email verification link over the user email
    // 1. We will sign a token
    let token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);
    // 2. Send this token over the user email
    const url = `http://localhost:3001/auth/verify-account/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    transporter.sendMail({
      from: "a.m2001nov@gmail.com",
      to: email,
      subject: "Verify your Account!",
      html: `
        <h1>Dear ${name}, Thanks for Siginig up with us! </h1>
        <p>Click on the below link to verify your email </p>
        <a href="${url}"> Click here </a>
        `,
    });
    return res.status(200).json({
      success: true,
      message:
        "Thanks for Signinig up. Please verify you account using the link send on email.",
    });
  } catch (err) {
    console.log("Error ", err);
    return res.status(500).json({ success: false, message: err });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user == null) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }

    // check if email is verfieid or not
    if (user.emailVerified == false) {
      return res
        .status(401)
        .json({ success: false, message: "Your account is not activated" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      return res.status(200).json({
        success: true,
        message: "Login Success",
        token: token,
        name: user.name,
        email: user.email,
        _id: user._id,
        imgUrl: user.imgUrl
          ? user.imgUrl
          : "https://bootdey.com/img/Content/avatar/avatar1.png",
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: err });
  }
}

async function verifyEmail(req, res) {
  try {
    const token = req.params.token;
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    await User.findByIdAndUpdate(decoded._id, { emailVerified: true });
    return res
      .status(200)
      .json({ success: true, message: "Your email is verified" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, message: "Invalid Link" });
  }
}

async function getAllUsers(req, res) {
  try {
    let data = await User.find();
    return res.status(200).json({ success: true, users: data });
  } catch (err) {
    return res.status(401).json({ success: false, message: err });
  }
}

export { signup, login, verifyEmail, getAllUsers };
