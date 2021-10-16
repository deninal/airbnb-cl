import { HeartIcon, StarIcon } from "@heroicons/react/outline";
import Image from "next/image";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="sm:flex border-b py-5 cursor-pointer hover:opacity-70 first:border-t transition duration-200 ease-out">
      <div className="relative h-52 w-full sm:h-52 sm:w-60 md:h-60 md:w-80 flex-shrink-0">
        <Image
          className="rounded-sm sm:rounded-md"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-3 flex flex-col flex-grow ">
        <div className="flex justify-between">
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">
            {location}
          </p>
          <HeartIcon className="h-7  w-7 md:h-10 md:w-10 rounded-full p-1 md:p-2 hover:bg-gray-100 " />
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl sm:-mt-1 md:-mt-3 md:font-light">
          {title}
        </h3>
        <div className="hidden sm:inline-flex border-b w-10 pt-2" />
        <p className="hidden sm:inline-flex text-gray-500 text-xs sm:text-sm md:text-base py-1 md:py-2 max-w-md flex-grow">
          {description}
        </p>

        <div className="flex justify-between mt-3 items-end">
          <p className="flex items-center gap-x-1 text-xs sm:text-base md:text-lg font-medium">
            <StarIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            {star}
          </p>
          <div className="flex flex-col place-items-end items-end">
              <p className="font-semibold text-lg">{price}</p>
              <p className="hidden sm:inline-flex text-xs md:text-sm ">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
