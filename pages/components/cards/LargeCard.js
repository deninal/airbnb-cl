import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative py-16 cursor-pointer">
      <div className="relative h-96 w-auto min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-28 left-11 md:top-32 md:left-16 ">
        <h3 className="text-white text-5xl font-semibold p-3">{title}</h3>
        <p className="text-white text-lg font-normal p-3 break-words max-w-[400px]">{description}</p>
        <button className="bg-white mt-4 ml-3 py-3 px-5 rounded-lg font-medium">{buttonText}</button>
      </div>
    </div>
  );
} 

export default LargeCard;
