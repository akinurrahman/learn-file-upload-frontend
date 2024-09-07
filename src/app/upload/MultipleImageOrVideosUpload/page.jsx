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

const MultipleMediaUpload = () => {
  const [mediaFiles, setMediaFiles] = useState([]); // To store selected files
  const [mediaPreviews, setMediaPreviews] = useState([]); // To store preview URLs

  const handleMediaChange = (e) => {
    const files = Array.from(e.target.files);
    const newMediaPreviews = files.map((file) => URL.createObjectURL(file));
    setMediaFiles((prevFiles) => [...prevFiles, ...files]);
    setMediaPreviews((prevPreviews) => [...prevPreviews, ...newMediaPreviews]);
  };

  const handleRemove = (index) => {
    setMediaFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setMediaPreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 min-h-screen">
      <h3 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg">
        Upload Multiple Images and Videos
      </h3>

      <label
        htmlFor="videoUpload"
        className="relative flex items-center justify-center w-full max-w-3xl p-6 mb-8 bg-white rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
      >
        <span className="text-lg text-gray-700 font-semibold">
          Select Videos or Images
        </span>
        <input
          id="media-upload"
          type="file"
          accept={`${SUPPORTED_IMAGE_FORMATS},${SUPPORTED_VIDEO_FORMATS}`}
          multiple
          onChange={handleMediaChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {mediaPreviews.map((preview, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            {mediaFiles[index]?.type.startsWith("image/") ? (
              <img
                src={preview}
                alt={`Preview ${index}`}
                className="w-full h-48 object-cover"
              />
            ) : mediaFiles[index]?.type.startsWith("video/") ? (
              <video
                src={preview}
                width="100%"
                height="auto"
                controls
                className="w-full h-48 object-cover"
              />
            ) : null}
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-2 right-2 bg-white text-gray-600 rounded-full w-6 h-6 flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-colors"
            >
              <span className="text-xl font-bold">×</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleMediaUpload;
