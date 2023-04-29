import Link from "next/link";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavItems from "./HeaderNavItems/HeaderNavItems";
import HeaderMenuItems from "./HeaderMenuItems/HeaderMenuItems";
import { useState } from "react";
import MenuIcons from "./MenuIcons/MenuIcons";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header class="fixed top-0 left-0 w-full bg-slate-100 shadow-slate-950 z-10">
        <div class="flex justify-between items-center px-7 md:px-12 py-3">
          <HeaderLogo />
          <HeaderNavItems />
          <HeaderMenuItems open={openMenu} setOpen={setOpenMenu} />
          <MenuIcons open={openMenu} setOpen={setOpenMenu} />
        </div>
      </header>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
