import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


const app = express();

app.use(cookieParser())
app.use(cors({ 
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.static("public"));
app.use(express.json({ limit: "30kb" }));

import router from "./routes/practise.route.js";
app.use("/api", router)

export default app;