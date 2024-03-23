import { User } from "../models/userSchema.js";
import {catchAsyncError} from '../middleware/catchAsyncError.js'
import ErrorHandler from '../middleware/errorMiddleware.js'

// wrap all controller function in asyncerror handler
export const patientRegister = catchAsyncError(async(req,res,next)=>{
        const {firstName,lastName,email,phone,nic,dob,gender,password,role,doctorDepartment,docAvatoar} = req.body;

        if(!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password || !role ){
            return next(new ErrorHandler("Please Fill all fields ",400))
        }

        const isExist = await User.findOne({email});

        if(isExist){
            return next(new ErrorHandler("User already exist, plese use other email address",400))
        }

       await User.create({firstName,lastName,email,phone,nic,dob,gender,password,role,doctorDepartment,docAvatoar})

       res.status(200).json({
        success:true,
        message :"Patient | User registration successfull"
       })
})

export const loginPatient = catchAsyncError(async(req,res,next)=>{
    const {email,password,confirmPassword,role} = req.body;

    if(!email || !password || !confirmPassword || !role){
        return next(new ErrorHandler("Please enter all fields",400))
    }

    if(password !== confirmPassword){
        return next(new ErrorHandler("Password does not match please check",400))
    }

    const user = await User.findOne({email}).select("+password");
    // console.log(user)
    if(!user){
        return next(new ErrorHandler("Invalid email id ",400));
    }

    const isPasswordMatch = await user.comparePassword(confirmPassword);
    if(!isPasswordMatch){
        return next(new ErrorHandler("Password does not match please check",400))
    }

    if(role !== user.role){
        return next(new ErrorHandler("User with this role not found ",400))
    }

    const token = await user.generateJsonWebToken()

    // console.log(token)
   

    res.status(200).json({
        success:true,
        message:"Login Successfull!",
        token:token
    })
    

     

})