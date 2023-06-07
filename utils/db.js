import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("failed to connect to MongoDB", error);
    }
}
