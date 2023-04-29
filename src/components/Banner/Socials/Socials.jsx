import Image from "next/image";
import Link from "next/link";
import Github from "./../../../../public/assets/images/github.png";
import Linkedin from "./../../../../public/assets/images/linkedin.png";

const Social = ({ link, icon }) => {
  return (
    <div class="w-12 translate-y-1">
      <Link
        href={link}
        class="inline-block bg-black w-full p-2 rounded-md transition-all hover:scale-110"
        target="_blank"
      >
        <Image src={icon} alt="github" class="w-7 h-7 translate-x-0.5" />
      </Link>
    </div>
  );
};

const Socials = () => {
  return (
    <div class="bg-slate-400 p-1.5 rounded-md absolute top-1/2 left-0 -translate-y-1/2">
      <Social link="https://github.com/anik95" icon={Github} />
      <Social
        link="https://www.linkedin.com/in/mustadir-mahmood-anik/"
        icon={Linkedin}
      />
    </div>
  );
};

export default Socials;
