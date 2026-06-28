import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';
import Logo from '../../../IMG/Logo.jpeg';
import DropdownMenu from './dropDownMenu';
import { useEffect, useRef, useState } from 'react';
import DropDownUserSettings from './dropDownUserSettings';

function page() {
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false);
  const [openDropDownUserSettings, setOpenDropDownUserSettings] =
    useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const hamburgerMenuClick = () => {
    setOpenDropDownMenu((prev) => !prev);
  };
  const userSettingsClick = () => {
    setOpenDropDownUserSettings((prev) => !prev);
  };
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenDropDownMenu(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenDropDownUserSettings(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div>
      <div>
        <nav className='flex bg-white text-black py-4 w-full'>
          <div className='container flex w-full items-center justify-between mx-auto'>
            <div
              ref={ref}
              className='relative'
            >
              <button
                onClick={hamburgerMenuClick}
                className='py-2 hover:cursor-pointer'
              >
                <RxHamburgerMenu size={24} />
              </button>
              {openDropDownMenu && <DropdownMenu />}
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
            <div
              ref={ref}
              className='relative'
            >
              <button
                className='py-2 px-4 rounded hover:cursor-pointer'
                onClick={userSettingsClick}
              >
                user
              </button>
              {openDropDownUserSettings && <DropDownUserSettings />}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default page;
