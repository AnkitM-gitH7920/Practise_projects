import express from "express";
// import controller functions here
import { provideHomePageInitialRenderResources } from "../controllers/homePageInitialRender.controller.js";

const homePageRouter = express.Router();

homePageRouter.route("/").get(provideHomePageInitialRenderResources);

export default homePageRouter