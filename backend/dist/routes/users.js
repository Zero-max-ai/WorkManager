"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const db_1 = require("../database/db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// @desc  - signup route
// @access  - Public route
// @return  - nothing
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "please fill all fields" });
    }
    const userExists = yield db_1.User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User Already Exists" });
    }
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = bcryptjs_1.default.hashSync(password, salt);
    const newUser = yield db_1.User.create({
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
}));
// @desc  - login route
// @access  - public route
// @return  - jwt token
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "please fill all fields" });
    }
    const userExists = yield db_1.User.findOne({ email });
    if (!userExists) {
        return res.status(404).json({ message: "User not found!" });
    }
    const isValidPassword = bcryptjs_1.default.compareSync(password, userExists.password);
    if (!isValidPassword) {
        return res.status(400).json({ message: "wrong credentails" });
    }
    const payload = {
        email,
        password: userExists.password,
        username: userExists.username,
    };
    const JWT_SECRET = process.env.JWT_SECRET;
    const userToken = jsonwebtoken_1.default.sign(payload, JWT_SECRET);
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
}));
exports.default = router;
