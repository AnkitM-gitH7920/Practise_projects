import express from "express"
import { registerUser, loginUser, logoutUser } from "../controllers/practise.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/users/register").post(registerUser);
router.route("/users/login").post(loginUser);

//secured routes
router.route("/users/logout").post(verifyJWT, logoutUser)

export default router;