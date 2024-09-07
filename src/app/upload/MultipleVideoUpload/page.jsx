"use client";
import { useState } from "react";

// Define supported video formats
const SUPPORTED_VIDEO_FORMATS = [
  "video/mp4",
  "video/webm",
  "video/ogg",
  "video/avi",
  "video/mkv",
  "video/mov",
].join(",");

const MultipleVideoUpload = () => {
  const [selectedVideos, setSelectedVideos] = useState([]); // To store selected video files
  const [videoPreviews, setVideoPreviews] = useState([]); // To store video previews

  const handleVideoChange = (e) => {
    const files = Array.from(e.target.files);

    // Generate previews for each new video
    const newVideoPreviews = files.map((file) => URL.createObjectURL(file));

    // Append new files to previously selected files
    setSelectedVideos((prevVideos) => [...prevVideos, ...files]);
    setVideoPreviews((prevPreviews) => [...prevPreviews, ...newVideoPreviews]);
  };

  const handleDelete = (index) => {
    // Remove video and its preview based on the index
    setSelectedVideos((prevVideos) => prevVideos.filter((_, i) => i !== index));
    setVideoPreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">
      <h3 className="text-4xl font-extrabold text-white mb-8">
        Upload Multiple Videos
      </h3>
      <label
        htmlFor="videoUpload"
        className="relative flex items-center justify-center w-full max-w-3xl p-6 mb-8 bg-white rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
      >
        <span className="text-lg text-gray-700 font-semibold">
          Select Videos
        </span>
        <input
          id="videoUpload"
          type="file"
          accept={SUPPORTED_VIDEO_FORMATS}
          multiple
          onChange={handleVideoChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {videoPreviews.map((preview, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <video
              src={preview}
              width="320"
              height="240"
              controls
              className="w-full h-auto object-cover"
            />
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-2 right-2 bg-white text-gray-600 rounded-full w-6 h-6 flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-colors"
            >
              <span className="text-lg font-bold">×</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleVideoUpload;
