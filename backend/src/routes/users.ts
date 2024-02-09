import express from "express";
const router = express.Router();
import { User } from "../database/db";
import bcrypt from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";

// @desc  - signup route
// @access  - Public route
// @return  - nothing
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "please fill all fields" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User Already Exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (!newUser) {
    return res
      .status(500)
      .json({ message: "Something wrong with server, please try again!" });
  }
  return res.status(201).json({ message: "User created" });
});

// @desc  - login route
// @access  - public route
// @return  - jwt token
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "please fill all fields" });
  }

  const userExists = await User.findOne({ email });
  if (!userExists) {
    return res.status(404).json({ message: "User not found!" });
  }

  const isValidPassword = bcrypt.compareSync(password, userExists.password);

  if (!isValidPassword) {
    return res.status(400).json({ message: "wrong credentails" });
  }

  const payload = {
    email,
    password: userExists.password,
    username: userExists.username,
  };
  const JWT_SECRET = process.env.JWT_SECRET;
  const userToken = jwt.sign(payload, JWT_SECRET as Secret);
  if (!userToken) {
    return res
      .status(500)
      .json({ message: "Internal server error! please try again!" });
  }
  res.cookie("WorkManger", userToken, {
    expires: new Date(Date.now() + 2592000),
    httpOnly: true,
  });
  return res.status(200).json({ message: "Welcome back!" });
});

export default router;
