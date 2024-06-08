import jwt from "jsonwebtoken";
function isLoggedIn(req, res, next) {
  try {
    // Check if you are authorised or not
    const accessToken = req.headers.authorization;
    const data = jwt.verify(accessToken, process.env.JWT_SECRET);
    // inject the data in the req
    req.user = data;
    // call the controller
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid Access Token" });
  }
}

export { isLoggedIn };
