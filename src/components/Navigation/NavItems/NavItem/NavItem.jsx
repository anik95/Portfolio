import Link from "next/link";

const NavItem = (props) => {
  return (
    <Link
      class="p-4 text-base font-bold uppercase text-gray-900 hover:text-yellow-400 transition-colors duration-300"
      href="#experience"
    >
      {props.children}
    </Link>
  );
};

export default NavItem;
