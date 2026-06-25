'use client';
import React from 'react';

function page() {
  return (
    <div className='flex flex-col items-center justify-center  bg-gray-100 border border-gray-300 rounded-lg h-2/4 shadow-md p-8 m-8'>
      <h1 className='text-2xl font-bold mb-4'>Photos</h1>
      <div className='flex w-full gap-1 h-75'>
        <div className='flex flex-3 border rounded-2xl p-4 justify-center items-center '>
          Photo 1
        </div>
        <div className='flex flex-1 border rounded-2xl p-4 justify-center'>
          Photo 2
        </div>
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
      onClick={() => alert('Upload Photo button clicked!')}>
        Upload Photo
      </button>
    </div>
  );
}

export default page;
