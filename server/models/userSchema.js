import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema({
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
    nic:{
        type:String,
        required:true,
        minLength: [13, "NIC number must be contain 13 digits"],
        maxLength:[13,"NIC number must be contain 11 digits"]
    },
    dob:{
        type:Date,
        required:[true,'DOB is required']
    },
    gender:{
        type:String,
        required:true,
        enum:['Male','Female']
    },
    password:{
        type:String,
        minLength:[11,'Password contain  At least 8 character'],
        required:true,
        select:false,
    },
    role:{
        type:String,
        required:true,
        enum:['Admin',"Patient","Doctor"],
    },
    doctorDepartment:{
        type:String,
    },
    docAvatoar:{
        public_id:String,
        url:String
    }
    
  });
  
  
  // create and export modal of schema
  
  export const User = mongoose.model("User",messageSchema);