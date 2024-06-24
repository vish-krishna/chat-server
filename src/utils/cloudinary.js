import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const configureCloudinary = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
};

const uploadFileOnCloud = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        const uploadedFileResponse = await cloudinary.uploader.upload(
            localFilePath,
            {
                resource_type: "auto",
            }
        );
        console.log("File uploaded on cloudinary - ", uploadedFileResponse);
        fs.unlinkSync(localFilePath);
        return uploadedFileResponse;
    } catch (error) {
        console.log("File uploaded on cloudinary Error - ", error);
        fs.unlinkSync(localFilePath);
        return null;
    }
};

export { uploadFileOnCloud, configureCloudinary };
