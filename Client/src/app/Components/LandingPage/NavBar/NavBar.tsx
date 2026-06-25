import Image from 'next/image';
import { useRouter } from 'next/navigation';

// icons
import Logo from '../../../IMG/Logo.jpeg';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function NavBar() {
  const router = useRouter();

  // functions
  const hamburgerMenuClick = () => {
    alert('Hamburger menu clicked!');
  };
  const SignInClick = () => {
    router.push('/Components/User/UserHomePage');
  };
  return (
    <div>
      <nav className='flex bg-white text-black py-4 w-full'>
        <div className='container flex w-full items-center justify-between mx-auto'>
          <div
            className='py-2 hover:cursor-pointer'
            onClick={hamburgerMenuClick}
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
          <div>
            <div
              className=' py-2 hover:cursor-pointer'
              onClick={SignInClick}
            >
              Sign In
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {};
