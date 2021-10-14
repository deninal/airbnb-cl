import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-3 md:px-20 items-center">
      {/* left section / logo */}
      <div className="relative flex items-center h-8 cursor-pointer my-auto">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle section / search  */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          className="flex-grow pl-3 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 "
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex md:mx-2 h-8 w-8 p-2 text-white bg-red-400 rounded-full cursor-pointer" />
      </div>
      {/* right side */}
      <div className="flex space-x-4 items-center justify-end">
        <p className="hidden md:inline cursor-pointer font-medium hover:bg-gray-100 px-3 py-2 rounded-full">
          Become a Host
        </p>
        <GlobeAltIcon className="h-10 w-10 text-gray-500 cursor-pointer hover:bg-gray-100 p-2 rounded-full" />

        <div className="flex border-2 rou rounded-full p-0.5 space-x-2 cursor-pointer hover:shadow-md items-center">
          <MenuIcon className="h-5 w-5 text-gray-500 ml-2" />
          <UserCircleIcon className="h-10 w-10 text-gray-500" />
        </div>
      </div>
    </header>
  );
}

export default Header;
