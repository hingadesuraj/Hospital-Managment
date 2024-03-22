import express from "express";
import connectToDb from './db.js'
import {config} from 'dotenv'
import cors from 'cors'

const app = express();
// setup dotenv file
config({path:"./config/config.env"})
connectToDb();

// middleware
// cors policy only access backend for frontend and dashboard url with request
app.use(cors({
    origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))


app.get("/", (req, res) => {
  res.send("Server is running...!");
});


app.listen(process.env.PORT, () => {
  console.log("Server Is running on Port http://localhost:" + process.env.PORT);
});
