import { Pacifico } from "next/font/google";
import { FaAddressBook } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { CgBatteryFull } from "react-icons/cg";
import Header from "@/compenents/Header";
import Slider from "@/compenents/Slider";

const pacifiko = Pacifico({ weight: "400" });

export default function Home() {

  return (
    <>
      <Header />

      <Slider />

      <div className="container mt-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="relative border-2 items-center justify-center flex flex-col p-4">
            <div className="relative">
              <FaAddressBook className="text-5xl" />
              <div className=" absolute -right-1 -top-3 bg-red-700 rounded-full px-2 text-white">2</div>
              <h2>Home1</h2>
            </div>
          </div>
          <div className="border-2 items-center justify-center flex flex-col p-4">
            <AiFillBank className="text-5xl" />
            <h2>Home2</h2>
          </div>
          <div className="border-2 items-center justify-center flex flex-col p-4">
            <AiFillBell className="text-5xl" />
            <h2>Home3</h2>
          </div>
          <div className="border-2 items-center justify-center flex flex-col p-4">
            <CgBatteryFull className="text-5xl" />
            <h2>Home4</h2>
          </div>
        </div>

      </div>

    </>
  );
}
