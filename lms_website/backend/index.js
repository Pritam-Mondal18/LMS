import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();

const port = process.env.PORT;
const app = express();

// middleware to parse JSON requests
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.listen(port, () => {
  console.log("Server started");
  connectDB();
});
