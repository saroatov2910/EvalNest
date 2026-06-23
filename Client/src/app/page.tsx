import Image from 'next/image';
import Logo from './IMG/Logo.jpeg';
// icons
import { RxHamburgerMenu } from "react-icons/rx";


export default function Home() {
  return (
    <div>
      <nav className='bg-white text-black p-4'>
        <div className='container mx-auto flex items-center justify-between'>
          <a
            href='#'
            className='px-3 py-2d'
          >
            <RxHamburgerMenu size={24} />
          </a>
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
          <div>
            <a
              href='#'
              className='px-3 py-2 '
            >
              Sing In
            </a>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
