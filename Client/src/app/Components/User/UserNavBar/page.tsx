import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';
import Logo from '../../../IMG/Logo.jpeg';
import DropdownMenu from './dropDownMenu';
import { useEffect, useRef, useState } from "react";



function page() {
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);


    const hamburgerMenuClick = () => {
        alert('Hamburger menu clicked!');
    };

    useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenDropDownMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div>
      <div>
        <nav className='flex bg-white text-black py-4 w-full'>
          <div className='container flex w-full items-center justify-between mx-auto'>
            <button
              onClick={hamburgerMenuClick}
              className='py-2 hover:cursor-pointer'
            >
              <RxHamburgerMenu size={24} />
            </button>
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
