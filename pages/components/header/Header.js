import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  // create state for the input field
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [nrOfGuests, setNrOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        nrOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 sm:grid-cols-3 gap-x-5 bg-white shadow-md px-3 py-3 md:px-10 lg:px-20  items-center ">
      {/* left section / logo */}

      <div
        onClick={() => router.push("/")}
        className=" relative sm:flex items-center h-8  my-auto  max-w-[105px]"
      >
        <Image
          className="cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle section / search  */}
      <div className="flex min-w-[170px] items-center border-2 rounded-full p-2 md:shadow-sm md:-left-px">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} // update input field based on the value we write
          className="flex-grow pl-3 bg-transparent outline-none min-w-[100px] text-sm text-gray-600 placeholder-gray-400 "
          type="text"
          placeholder={placeholder || "Search location"}
        />
        <SearchIcon className="md:inline-flex h-8 w-8 min-w-[2rem] p-2 text-white bg-red-400 rounded-full cursor-pointer" />
      </div>
      {/* right side */}
      <div className="flex space-x-2 sm:space-x-4 items-center justify-end">
        <p className="hidden md:inline-flex cursor-pointer font-medium hover:bg-gray-100 px-3 py-2  rounded-full">
          Become a Host
        </p>
        <GlobeAltIcon className="hidden sm:inline-flex sm:h-10 sm:w-10 min-w-[2.5rem] text-gray-500 cursor-pointer hover:bg-gray-100 p-2 rounded-full" />

        <div className="flex border-2 rounded-full p-0.5 space-x-2 cursor-pointer hover:shadow-md items-center">
          <MenuIcon className="h-5 w-5 text-gray-500 sm:ml-2" />
          <UserCircleIcon className="hidden sm:inline-flex sm:h-10 sm:w-10 text-gray-500" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center border-b mb-4 pb-3">
            <h2 className="text-xl pl-3 flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={nrOfGuests}
              onChange={(e) => setNrOfGuests(e.target.value)}
              min={1}
              max={15}
              type="number"
              className="w-12 pl-2 text-lg outline-none "
            />
          </div>
          <div className="flex">
            <button
              onClick={resetInput}
              className="flex-grow border rounded-full py-2 mx-2.5 shadow-sm hover:shadow-md font-medium"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow border rounded-full py-2 mx-2.5 shadow-sm hover:shadow-md bg-red-400 font-medium text-white"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
