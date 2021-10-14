import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[400px] lg:h-[500px] 2xl:h-[550px]">
      <Image
        className=""
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_q=highq&im_w=2560"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-medium">
          Not sure where to go? Perfect.
        </p>
        <button className="bg-white text-gradient text-xl font-semibold drop-shadow-lg hover:drop-shadow-xl text-purple-800 py-4 px-10 mt-3 rounded-full active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
