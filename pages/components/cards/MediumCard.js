import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="items-center mt-5 rounded-xl cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-72 w-72">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h1 className="text-xl font-semibold pt-1">{title}</h1>
      </div>
    </div>
  );
}

export default MediumCard;
