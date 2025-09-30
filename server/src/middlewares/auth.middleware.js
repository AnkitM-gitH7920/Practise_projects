import APIResponse from "../utils/APIResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res
                .status(401)
                .json(new APIResponse(401, "Unauthorized request", false, null))
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
        if (!user) {
            return res
                .status(401)
                .json(new APIResponse(401, "Invalid access token", false, null))
        }

        req.user = user;
        next();

    } catch (error) {
        return res
            .status(401)
            .json(new APIResponse(401, "Invalid access token", false, null))
    }
})

export default verifyJWT;