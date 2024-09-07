"use client";
import { useState } from "react";

// Define supported formats for images and videos
const SUPPORTED_IMAGE_FORMATS = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg+xml",
  "image/bmp",
  "image/tiff",
].join(",");

const SUPPORTED_VIDEO_FORMATS = [
  "video/mp4",
  "video/webm",
  "video/ogg",
  "video/avi",
  "video/mkv",
  "video/mov",
].join(",");

const SingleMediaUpload = () => {
  const [mediaType, setMediaType] = useState(null); // To determine if the file is an image or video
  const [mediaPreview, setMediaPreview] = useState(null); // For showing preview
  const [mediaFile, setMediaFile] = useState(null); // For uploading the file

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type.split("/")[0]; // 'image' or 'video'

      // Set preview URL based on the file type
      const mediaUrl = URL.createObjectURL(file);
      setMediaFile(file);
      setMediaPreview(mediaUrl);
      setMediaType(fileType);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-200 to-blue-500">
      <h3 className="text-3xl font-bold text-white mb-6">
        Upload a Single Image or Video
      </h3>
      <label
        htmlFor="mediaUpload"
        className="relative flex items-center justify-center w-full max-w-md p-4 mb-6 bg-white rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition-all"
      >
        <span className="text-lg text-gray-700">Choose File</span>
        <input
          id="mediaUpload"
          type="file"
          accept={`${SUPPORTED_IMAGE_FORMATS},${SUPPORTED_VIDEO_FORMATS}`}
          onChange={handleMediaChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </label>

      {mediaPreview && (
        <div className="w-full max-w-md mt-6 bg-white rounded-lg overflow-hidden shadow-lg border border-gray-300">
          {mediaType === "image" ? (
            <img
              src={mediaPreview}
              alt="Uploaded preview"
              className="w-full h-auto object-cover rounded-t-lg"
            />
          ) : mediaType === "video" ? (
            <video
              src={mediaPreview}
              className="w-full h-auto rounded-t-lg"
              controls
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SingleMediaUpload;
