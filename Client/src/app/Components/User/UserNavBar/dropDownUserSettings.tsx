import React from 'react';
import { useRouter } from 'next/navigation';

function dropDownUserSettings() {
  const router = useRouter();

  const logOutClick = () => {
    router.push('/');
  };
  return (
    <div>
      <div className='absolute mt-2 right-1 w-40 bg-white border rounded-lg shadow-lg'>
        <ul className='flex flex-col'>
          <li className='p-2 hover:bg-gray-100 cursor-pointer'>Profile</li>
          <li className='p-2 hover:bg-gray-100 cursor-pointer'>Settings</li>
          <li
            className='p-2 hover:bg-gray-100 cursor-pointer'
            onClick={logOutClick}
          >
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default dropDownUserSettings;
