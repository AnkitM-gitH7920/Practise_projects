import mongoose from "mongoose"

const DATABASE_NAME = process.env.DATABASE_NAME;

async function connectDB(){
    try {
        const connnectionInstance = await mongoose.connect(`mongodb+srv://ankitmehra7920:ankitmehramongodb1234@cluster0.42eas6o.mongodb.net/users`)
        console.log("DB connection success !! PORT :", connnectionInstance.connection.port)
    } catch (error) {
        console.log("Error connecting to database")
    }
}


export default connectDB;

// mongodb+srv://ankitmehra7920:ankitmehramongodb1234@cluster0.42eas6o.mongodb.net/practise  <-- mongoDB atlas connection string