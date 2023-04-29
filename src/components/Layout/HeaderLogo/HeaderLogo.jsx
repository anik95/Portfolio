import Image from "next/image";
import Logo from "../../../../public/assets/images/logo.jpg";
import Link from "next/link";

const HeaderLogo = () => (
  <div class="flex space-x-4 justify-between items-center">
    <Link href="/">
      <Image
        src={Logo}
        alt="logo"
        class="cursor-pointer w-12 h-12 min-w-[48px] min-h-[48px] rounded-full object-cover"
      />
    </Link>
    <Link href="/">
      <span class="cursor-pointer text-sm md:text-base font-bold uppercase text-gray-700 hover:text-yellow-500 transition-colors duration-300">
        Mustadir Mahmood
      </span>
    </Link>
  </div>
);

export default HeaderLogo;
