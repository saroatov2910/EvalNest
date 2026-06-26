import Image from "next/image";
import { useRouter } from "next/navigation";
import DropdownMenu from "./dropDownMenu";
import { useEffect, useRef, useState } from "react";

// icons
import Logo from "../../../IMG/Logo.jpeg";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  const router = useRouter();
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  
  // functions
  const hamburgerMenuClick = () => {
    setOpenDropDownMenu((prev) => !prev);
  };
  const SignInClick = () => {
    router.push("/Components/User/UserHomePage");
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
      <nav className="flex bg-white text-black py-4 w-full">
        <div className="container flex w-full items-center justify-between mx-auto">
          <div ref={ref} className="relative">
            <button
              onClick={hamburgerMenuClick}
              className="px-4 py-2 border rounded-lg cursor-pointer"
            >
              <RxHamburgerMenu />
            </button>

            {openDropDownMenu && <DropdownMenu />}
          </div>
          <div className="text-lg font-bold">
            <Image
              src={Logo}
              alt="Logo"
              width={60}
              height={60}
              className="inline-block mr-2 rounded-full"
            />
            MyApp
          </div>
          <div>
            <div className=" py-2 hover:cursor-pointer" onClick={SignInClick}>
              Sign In
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {};
