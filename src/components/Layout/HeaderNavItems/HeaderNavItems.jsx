import HeaderNavItem from "./HeaderNavItem/HeaderNavItem";

const HeaderNavItems = () => (
  <div class="hidden sm:flex justify-between items-center space-x-10">
    <HeaderNavItem href="/">home</HeaderNavItem>
    <HeaderNavItem href="/#about">about</HeaderNavItem>
    <HeaderNavItem href="/#projects">projects</HeaderNavItem>
  </div>
);

export default HeaderNavItems;
