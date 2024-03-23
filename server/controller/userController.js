import { User } from "../models/userSchema.js";
import {catchAsyncError} from '../middleware/catchAsyncError.js'
import ErrorHandler from '../middleware/errorMiddleware.js'

// wrap all controller function in asyncerror handler
export const patientRegister = catchAsyncError(async(req,res,next)=>{
        const {firstName,lastName,email,phone,nic,dob,gender,password,role,doctorDepartment,docAvatoar} = req.body;

        if(!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password || !role ){
            return next(new ErrorHandler("Please Fill all fields ",400))
        }

       await User.create({firstName,lastName,email,phone,nic,dob,gender,password,role,doctorDepartment,docAvatoar})

       res.status(200).json({
        success:true,
        message :"Patient | User registration successfull"
       })
})