import express from "express";
import { loginUserViaPhoneNumber } from "../controllers/authorisation.controller.js";


const authRouter = express.Router();

authRouter.route("/login").post(loginUserViaPhoneNumber)

export default authRouter;