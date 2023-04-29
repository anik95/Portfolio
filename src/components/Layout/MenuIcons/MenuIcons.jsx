import OpenIcon from "./../../../../public/assets/svg/ham-menu.svg";
import CloseIcon from "./../../../../public/assets/svg/ham-menu-close.svg";
import Image from "next/image";

const MenuIcons = ({ open, setOpen }) => {
  return (
    <div class="cursor-pointer sm:hidden translate-y-px">
      {open ? (
        <Image
          src={CloseIcon}
          alt="close menu"
          onClick={() => setOpen(false)}
        />
      ) : (
        <Image src={OpenIcon} alt="open menu" onClick={() => setOpen(true)} />
      )}
    </div>
  );
};

export default MenuIcons;
