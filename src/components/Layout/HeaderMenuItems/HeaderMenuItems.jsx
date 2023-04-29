import HeaderMenuItem from "./HeaderMenuItem/HeaderMenuItem";

const HeaderMenuItems = ({ open, setOpen }) => {
  return (
    <div
      class={`flex opacity-100 w-full ${
        !open ? "invisible" : ""
      } sm:invisible sm:opacity-0 transition-all duration-300 absolute top-full left-0`}
    >
      <ul class="list-none w-full bg-gray-50">
        <HeaderMenuItem
          hasTopBorder={true}
          item="Home"
          href="/"
          setOpen={setOpen}
        />
        <HeaderMenuItem item="About" href="/#about" setOpen={setOpen} />
        <HeaderMenuItem item="Projects" href="/#projects" setOpen={setOpen} />
      </ul>
    </div>
  );
};

export default HeaderMenuItems;
