import asyncHandler from "../utils/asyncHandler.js";
import APIResponse from "../utils/APIResponse.js";
import User from "../models/user.model.js"

// status, message, success, data

const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax"
}  // cookie options

function generateAccessAndRefreshToken(user) {
    try {
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        return { accessToken, refreshToken };

    } catch (error) {
        return { JWTError: "Something went wrong while generating access and refresh token" }
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username.trim().length || !password.trim().length) {
            return res
                .status(404)
                .json(new APIResponse(404, "Both fields are required", false, null))
        }

        const alreadyRegistered = await User.findOne({ username: username }).select("-password");
        if (alreadyRegistered) {
            return res
                .status(409)
                .json(new APIResponse(409, "User is already registered", false, alreadyRegistered))
        }

        const user = await User.create({
            username: username || "",
            password: password || ""
        })
        if (!user) {
            return res
                .status(400)
                .json(new APIResponse(400, "Cannot register the user at the moment", false, null))
        }

        const newlyRegisteredUser = await User.findById(user?._id).select("-password");

        return res
            .status(200)
            .json(new APIResponse(200, "Registered user successfully", true, newlyRegisteredUser))
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json(new APIResponse(500, "Internal server error", false, null))
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { loginUsername, loginPassword } = req.body;
    try {
        if (!loginUsername.trim().length || !loginPassword.trim().length) {
            return res
                .status(404)
                .json(new APIResponse(404, "Both fields are required", false, null))
        }

        const user = await User
            .findOne({ username: loginUsername });
        if (!user) {
            return res
                .status(404)
                .json(new APIResponse(404, "User is not registered", false, null));
        }

        const isPassvalid = await user.isPasswordCorrect(loginPassword);
        if (!isPassvalid) {
            return res
                .status(401)
                .json(new APIResponse(401, "Invalid password", false, null))
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user);

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false })

        const userDataForFrontend = {
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            username: user.username,
            _id: user._id,
            __v: user.__v
        }
        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(new APIResponse(200, "Login successfull", true, userDataForFrontend))

        // start by resolving cookie not receiving error

    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json(new APIResponse(500, "Internal server error", false, error))
    }

})

const logoutUser = asyncHandler(async (req, res) => {
    const user = req.user;
    if (!user) {
        return res
            .status(500)
            .json(new APIResponse(500, "Cannot find the user", false, null))

    }

    await User.findByIdAndUpdate(user?._id, {
        $set: {
            refreshToken: null
        }
    }, { new: true })

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new APIResponse(200, "User logged out successfully", true, null))
})
export {
    registerUser,
    loginUser,
    logoutUser
}