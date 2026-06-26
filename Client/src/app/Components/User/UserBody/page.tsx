"use client";
import React from "react";

function page() {

  const uploadClick = () => {
    alert('upload clicked')
  }
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 border border-gray-300 rounded-lg h-2/4 shadow-md p-8 m-8">
      <h1 className="text-2xl font-bold mb-4">Photos</h1>
      <div className="flex w-full gap-1 h-75">
        <div className="flex flex-3 border rounded-2xl p-4 justify-center items-center ">
          Photo 1
        </div>
        <div className="h-75 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent p-2 border rounded-2xl gap-1">
          <div className="border w-full rounded-2xl items-center flex justify-center h-1/3">
            1
          </div>
          <div className="border w-full rounded-2xl items-center flex justify-center h-1/3">
            2
          </div>
          <div className="border w-full rounded-2xl items-center flex justify-center h-1/3">
            3
          </div>
          <div className="border w-full rounded-2xl items-center flex justify-center h-1/3">
            4
          </div>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={uploadClick}
      >
        Upload Photo
      </button>
    </div>
  );
}

export default page;
