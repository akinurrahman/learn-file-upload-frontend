"use client";
import { useState } from "react";

function MultipleImageUpload() {
  const [selectedImages, setSelectedImages] = useState([]); // To store selected image files
  const [previews, setPreviews] = useState([]); // To store image previews

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages((prev) => [...prev, ...files]);

    // Generate previews for each selected image
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...imagePreviews]);
  };

  const handleDelete = (index) => {
    // Remove image and its preview based on the index
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
      <h3 className="text-4xl font-extrabold text-white mb-8">
        Upload Multiple Images
      </h3>
      <label
        htmlFor="imageUpload"
        className="relative flex items-center justify-center w-full max-w-3xl p-6 mb-8 bg-white rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
      >
        <span className="text-lg text-gray-700 font-semibold">
          Select Images
        </span>
        <input
          id="imageUpload"
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </label>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-7xl">
        {previews.map((preview, index) => (
          <div
            key={index}
            className="relative w-full h-60 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={preview}
              alt={`Preview ${index}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-2 right-2 bg-white text-gray-600 rounded-full w-5 h-5 flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-colors"
            >
              <span className="text-lg font-bold">×</span> 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultipleImageUpload;
