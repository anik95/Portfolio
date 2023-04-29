import Link from "next/link";

const HeaderMenuItem = ({ hasTopBorder, item, href, setOpen }) => {
  return (
    <li
      onClick={() => setOpen(false)}
      class={`text-gray-700 border-b ${
        hasTopBorder ? "border-t" : ""
      } border-gray-300 cursor-pointer hover:text-yellow-500 transition-colors duration-300 h-16 w-full flex justify-end`}
    >
      <Link
        href={href}
        class="tracking-wide text-sm font-bold uppercase w-full px-6 py-5 text-right"
      >
        {item}
      </Link>
    </li>
  );
};

export default HeaderMenuItem;
