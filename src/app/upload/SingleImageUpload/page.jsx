"use client";
import { useState } from "react";

const SingleImageUpload = () => {
  const [imagePreview, setImagePreview] = useState(null); // For showing preview
  const [imageFile, setImageFile] = useState(null); // For uploading the image

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Set preview image
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);

      // Store file for backend upload later
      setImageFile(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-purple-200 to-indigo-500">
      <h3 className="text-2xl font-bold text-white mb-6">
        Upload a Single Image
      </h3>

      <div className="flex flex-col items-center">
        <label
          htmlFor="imageUpload"
          className="relative flex items-center justify-center w-full max-w-xs p-4 bg-white rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition-all"
        >
          <span className="text-lg text-gray-700">Choose Image</span>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </label>

        {imagePreview && (
          <div className="mt-6">
            <img
              src={imagePreview}
              alt="Uploaded preview"
              className="w-36 h-36 object-cover rounded-lg shadow-md border border-gray-300"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleImageUpload;
