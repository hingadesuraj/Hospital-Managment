import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "User More than Three latter"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "User More than Three latter"],
  },
  email: {
    type: String,
    required: true,
    validate:[validator.isEmail,"Please enter a valid email"]
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must be contain 11 digits"],
    maxLength:[11,"Phone number must be contain 11 digits"]
  },
  message:{
    type:String,
    required:true,
    minLength:[10,"Input Valid message, must be contain  10 letter "]
  }
});


// create and export modal of schema

export const Message = mongoose.model("Message",messageSchema);