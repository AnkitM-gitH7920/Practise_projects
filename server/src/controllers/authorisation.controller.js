import asyncHandler from "../utils/asyncHandler.js";
import APIResponse from "../utils/APIResponse.js";

// APIResponse class format :- status, message, success, data

const loginUserViaPhoneNumber = asyncHandler(async(req, res) => {
    let { phoneNumber } = req.body;
    phoneNumber = Number.parseInt(phoneNumber);

    // Somehow the user was able to call backend with a invalid format phone number :- Backend will refuse it 
    if(phoneNumber.length !== 10 && phoneNumber.length === 0){
        return res
        .status(400)
        .json(new APIResponse( 400, "Invalid phone number length", false, { phoneNumberLength: phoneNumber.length } ))
    }

    // Pending database work, First complete the signup functionality from the frontend

    return res
    .status(200)
    .json({ 
        message: "API hit success",
        typeofPhoneNumber : typeof phoneNumber
     })
})

export {
    loginUserViaPhoneNumber
}