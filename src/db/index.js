import mongoose from "mongoose";
import { DB_NAME } from "../constants/index.js";

const connectDB = async () => {
    try {
        const connectionString = `${process.env.MONGODB_URI}/${DB_NAME}`;
        console.log("connectionString -> ", connectionString);
        const connectionInstanse = await mongoose.connect(connectionString);
        console.log(
            "Mongodb connected !! ",
            connectionInstanse.connection.host
        );
    } catch (error) {
        console.log("Mongodb connection failed !! ", error);
        process.exit(1);
    }
};

export default connectDB;
