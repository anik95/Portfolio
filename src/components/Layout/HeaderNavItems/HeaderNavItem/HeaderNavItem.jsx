import Link from "next/link";

const HeaderNavItem = (props) => (
  <Link
    class="py-6 tracking-wide text-xs md:text-base font-bold uppercase text-gray-700 hover:text-yellow-500 transition-colors duration-300"
    href={props.href}
  >
    {props.children}
  </Link>
);

export default HeaderNavItem;
