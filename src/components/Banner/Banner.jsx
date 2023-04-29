import Image from "next/image";
import Content from "./Content/Content";
import Socials from "./Socials/Socials";
import { FaAngleDoubleDown } from "react-icons/fa";

const Banner = () => {
  return (
    <div class="h-screen bg-gradient-to-r from-slate-300 to-slate-100 flex justify-center items-center px-14 relative overflow-hidden">
      <Content />
      <Socials />
      <FaAngleDoubleDown class="animate-bounce text-4xl absolute bottom-0 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default Banner;
