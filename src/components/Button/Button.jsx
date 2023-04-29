const { default: Link } = require("next/link");

const Button = ({ children, link, newTab = true, type }) => {
  return (
    <>
      <button class="w-56 text-center h-14 block">
        <Link
          href={link}
          target={newTab ? "_blank" : ""}
          class={`${
            type !== "secondary"
              ? "bg-yellow-400"
              : "bg-white border-2	border-yellow-400"
          } text-lg rounded-md tracking-widest font-bold uppercase w-full h-full flex justify-center items-center hover:translate-y-2 ease-in duration-300 shadow-gray-500/40 shadow-sm`}
        >
          {children}
        </Link>
      </button>
    </>
  );
};
export default Button;
