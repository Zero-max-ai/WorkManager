import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./database/db";
const app: express.Application = express();
const envPORT = process.env.PORT;
const port = envPORT || 3000;

import userRouter from "./routes/users";

dotenv.config();
connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);

app.listen(port, () => console.log(`server is listening on: ${port}`));
