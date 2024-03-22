import express from "express";
import connectToDb from './db.js'
import {config} from 'dotenv'

const app = express();
// setup dotenv file
config({path:"./config/config.env"})
 
connectToDb();

app.get("/", (req, res) => {
  res.send("Server is running...!");
});

app.listen(process.env.PORT, () => {
  console.log("Server Is running on Port http://localhost:" + process.env.PORT);
});
