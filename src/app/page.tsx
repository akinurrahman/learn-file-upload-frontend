"use client";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
      </div>
      <div className="relative text-center mb-12 z-10">
        <h1 className="text-6xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight">
          Media Uploads Made Easy
        </h1>
        <p className="text-xl text-white font-semibold mb-12 drop-shadow-md">
          Select the appropriate option to upload your media files effortlessly.
        </p>
      </div>
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 z-10">
        <Link href="/upload/SingleImageUpload">
          <button className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold py-5 px-8 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl group w-64">
            <span className="absolute inset-0 bg-black opacity-30"></span>
            <span className="relative z-10">Select One Image</span>
            <span className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-transparent to-teal-700 rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></span>
          </button>
        </Link>
        <Link href="/upload/MultipleImageUpload">
          <button className="relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold py-5 px-8 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl group w-64">
            <span className="absolute inset-0 bg-black opacity-30"></span>
            <span className="relative z-10">Select Images</span>
            <span className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-transparent to-yellow-700 rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></span>
          </button>
        </Link>
        <Link href="/upload/SingleVideoUpload">
          <button className="relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-5 px-8 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl group w-64">
            <span className="absolute inset-0 bg-black opacity-30"></span>
            <span className="relative z-10">Select One Video</span>
            <span className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-transparent to-purple-700 rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></span>
          </button>
        </Link>
        <Link href="/upload/MultipleVideoUpload">
          <button className="relative overflow-hidden bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold py-5 px-8 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl group w-64">
            <span className="absolute inset-0 bg-black opacity-30"></span>
            <span className="relative z-10">Select Videos</span>
            <span className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-transparent to-red-700 rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></span>
          </button>
        </Link>
        <Link href="/upload/SingleImgOrVideoUpload">
          <button className="relative overflow-hidden bg-gradient-to-r from-green-500 to-lime-600 text-white font-bold py-5 px-8 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl group w-64">
            <span className="absolute inset-0 bg-black opacity-30"></span>
            <span className="relative z-10">Select One Media File</span>
            <span className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-transparent to-green-700 rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></span>
          </button>
        </Link>
        <Link href="/upload/MultipleImageOrVideosUpload">
          <button className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold py-5 px-8 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl group w-64">
            <span className="absolute inset-0 bg-black opacity-30"></span>
            <span className="relative z-10">Select Media Files</span>
            <span className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-transparent to-blue-700 rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
