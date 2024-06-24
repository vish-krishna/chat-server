import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import { configureCloudinary } from "./utils/cloudinary.js";
dotenv.config({
    path: "./.env",
});

configureCloudinary();
connectDB()
    .then(() => {
        const port = process.env.PORT || 8000;
        app.on("error", () => {
            console.log(`App is unable to communicate with database`);
        });
        app.listen(port, () => {
            console.log(`App is listennig at port : ${port}`);
        });
    })
    .catch((error) => {
        console.log("Mongodb connection failed !!! ", error);
    });
