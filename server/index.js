import express from "express";
import connectToDb from "./db.js";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload"; // use for upload file from file manager

const app = express();
config({ path: "./config/config.env" }); // setup dotenv file
connectToDb();  // connect database

// middleware
// cors policy only access backend for frontend and dashboard url with request
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.get("/", (req, res) => {
  res.send("Server is running...!");
});

app.listen(process.env.PORT, () => {
  console.log("Server Is running on Port http://localhost:" + process.env.PORT);
});
