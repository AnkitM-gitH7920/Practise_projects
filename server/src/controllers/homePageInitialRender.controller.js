import asyncHandler from "../utils/asyncHandler.js";
import APIResponse from "../utils/APIResponse.js";


const provideHomePageInitialRenderResources = asyncHandler(async (req, res) => {
    return res
    .status(200)
    .json({ success: true })
})


export {
    provideHomePageInitialRenderResources
}