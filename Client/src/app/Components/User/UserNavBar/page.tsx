import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';
import Logo from '../../../IMG/Logo.jpeg';


function page() {

    const hamburgerMenuClick = () => {
        alert('Hamburger menu clicked!');
    };
  return (
    <div>
      <div>
        <nav className='flex bg-white text-black py-4 w-full'>
          <div className='container flex w-full items-center justify-between mx-auto'>
            <div
              className='py-2 hover:cursor-pointer'
            >
              <RxHamburgerMenu size={24} />
            </div>
            <div className='text-lg font-bold'>
              <Image
                src={Logo}
                alt='Logo'
                width={60}
                height={60}
                className='inline-block mr-2 rounded-full'
              />
              MyApp
            </div>
            <div className='flex '>
                <div>user</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default page;
