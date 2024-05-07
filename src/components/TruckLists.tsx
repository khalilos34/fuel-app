import Image from "next/image";

const TruckLists = () => {
  return (
    <ul className="border-black/0.08 border-b bg-white">
      <li>
        <button className="flex h-[50px] w-full cursor-pointer items-center gap-2 px-5 hover:bg-[#eff1f2] focus:bg-[#eff1f2]">
          <Image
            src="https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
            alt="placeholder"
            className="rounded-full object-cover"
            width={35}
            height={35}
          />
          <p className="font-semibold">sle7</p>
        </button>
      </li>
      <li>
        <button className="flex h-[50px] w-full cursor-pointer items-center gap-2 px-5 hover:bg-[#eff1f2] focus:bg-[#eff1f2]">
          <Image
            src="https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
            alt="placeholder"
            className="rounded-full object-cover"
            width={35}
            height={35}
          />
          <p className="font-semibold">Chaker</p>
        </button>
      </li>
      <li>
        <button className="flex h-[50px] w-full cursor-pointer items-center gap-2 px-5 hover:bg-[#eff1f2] focus:bg-[#eff1f2]">
          <Image
            src="https://bytegrad.com/course-assets/react-nextjs/pet-placeholder.png"
            alt="placeholder"
            className="rounded-full object-cover"
            width={35}
            height={35}
          />
          <p className="font-semibold">5138 tu 202</p>
        </button>
      </li>
    </ul>
  );
};

export default TruckLists;
