import Image from "next/image";
import LinkedInImg from "./../../../../public/assets/images/linkedin.png";
import GithubImg from "./../../../../public/assets/images/github.png";
import Link from "next/link";

const Footer = () => (
  <footer class="bg-black py-10 mt-14">
    <div class="flex mx-5 md:mx-10 justify-end flex-wrap">
      <div class="w-full md:w-1/2">
        <h1 class="text-white font-medium text-xl mb-4">Mustadir Mahmood</h1>
        <p class="text-white font-normal text-sm">
          A MERN stack focused Web Developer building Web Applications that
          leads to the success of the overall product
        </p>
      </div>
      <div class="w-full md:w-1/2 mt-8 md:mt-0">
        <h1 class="text-white font-medium text-xl mb-4 md:text-end">Social</h1>
        <div class="flex justify-start md:justify-end items-center">
          <Link
            class="pr-3 cursor-pointer"
            href="https://www.linkedin.com/in/mustadir-mahmood-anik/"
            target="_blank"
          >
            <Image src={LinkedInImg} alt="Linkedin Social" class="w-6" />
          </Link>
          <Link
            class="cursor-pointer"
            href="https://github.com/anik95"
            target="_blank"
          >
            <Image src={GithubImg} alt="Linkedin Social" class="w-6" />
          </Link>
        </div>
      </div>
    </div>
    <p class="mx-5 md:mx-10 border-t-1 border-white mt-5 text-white text-center text-xs p-5 pb-0">
      © Copyright {new Date().getFullYear()}. Made by Mustadir Mahmood Anik
    </p>
  </footer>
);

export default Footer;
