import express from "express";
// import controller functions here
import { verifyUserUsingCookieAuthToken } from "../controllers/homePageInitialRender.controller.js";

const homePageRouter = express.Router();

homePageRouter.route("/getuser").get(verifyUserUsingCookieAuthToken);

export default homePageRouter