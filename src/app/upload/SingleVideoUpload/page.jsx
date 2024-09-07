"use client";
import { useState } from "react";

// Define supported video formats in a separate constant
const SUPPORTED_VIDEO_FORMATS = [
  "video/mp4",
  "video/webm",
  "video/ogg",
  "video/avi",
  "video/mkv",
  "video/mov",
].join(",");

function SingleVideoUpload() {
  const [selectedVideo, setSelectedVideo] = useState(null); // To store selected video file
  const [videoPreview, setVideoPreview] = useState(null); // To store video preview

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedVideo(file); // Set the selected video file
      setVideoPreview(URL.createObjectURL(file)); // Generate a preview URL for the video
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-200 to-blue-500">
      <h3 className="text-2xl font-bold text-white mb-6">
        Upload a Single Video
      </h3>
      <label
        htmlFor="videoUpload"
        className="relative flex items-center justify-center w-full max-w-md p-4 mb-6 bg-white rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition-all"
      >
        <span className="text-lg text-gray-700">Choose Video</span>
        <input
          id="videoUpload"
          type="file"
          accept={SUPPORTED_VIDEO_FORMATS}
          onChange={handleVideoChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </label>

      {videoPreview && (
        <div className="w-full max-w-md mt-6 bg-white rounded-lg shadow-lg p-4">
          <h4 className="text-xl font-semibold mb-4">Video Preview:</h4>
          <video
            src={videoPreview}
            width="320"
            height="240"
            controls
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default SingleVideoUpload;
