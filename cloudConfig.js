const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

if (!process.env.CLOUD_NAME || !process.env.CLOUD_API_KEY || !process.env.CLOUD_API_SECRET) {
  console.warn(
    "Cloudinary credentials are not set. Image uploads will fail — set CLOUD_NAME, CLOUD_API_KEY and CLOUD_API_SECRET in environment."
  );
}

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wanderlust_DEV",
    allowed_formats: ["png", "jpg", "jpeg"], // supports promises as well
    // public_id: (req, file) => "computed-filename-using-request",
  },
});

module.exports = {
  cloudinary,
  storage,
};
