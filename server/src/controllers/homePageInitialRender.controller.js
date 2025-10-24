import asyncHandler from "../utils/asyncHandler.js";
import APIResponse from "../utils/APIResponse.js";

// APIResponse :- status, message, success, data
const verifyUserUsingCookieAuthToken = asyncHandler(async(req, res) => {
    return res
    .status(200)
    .json({ 
        success: true
     })
})


export {
    verifyUserUsingCookieAuthToken
}