import connectDB from "./db/connectDB.js";
import app from "./app.js";

const PORT = process.env.PORT || 8080;

connectDB().
then((response) => {
    app.listen(PORT, () => {
        console.log("Server started successfully at : ", `http://localhost:${PORT}`);
    })
}).catch(err => console.log("Internal server error"))