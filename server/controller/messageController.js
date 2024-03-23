import { Message } from "../models/messageSchema.js";
import {catchAsyncError} from '../middleware/catchAsyncError.js'
import ErrorHandler from '../middleware/errorMiddleware.js'

export const sendMessage = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    // use error handler class here to pass error 
    return next( new ErrorHandler("Please Fill Full Form!",400))
  }

  await Message.create({ firstName, lastName, email, phone, message });

  res.status(200).json({
    success: true,
    message: "Message send successfully!",
  });
});


// flow of folder structure :::---->   model->controller(use modal and schema in controller file) ->router (use controller file in router folder) ->use in index.js