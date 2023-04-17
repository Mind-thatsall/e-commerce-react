import { Link } from "react-router-dom";
import { useRef } from "react";
import { openSearch } from "@/utils/animations";
import SearchBar from "@/components/SearchBar";
import Menu from "@/components/Menu";

const Navbar = () => {
  const inputRef = useRef(null);
  const bgModalRef = useRef(null);

  return (
    <>
      <SearchBar inputRef={inputRef} bgModalRef={bgModalRef} />
      <Menu />
      <nav
        className="z-[2] mix-blend-difference text-[#796B66] fixed flex justify-between w-full px-[4vw] md:px-[6vw] mt-[1.25vh] text-[4vw] md:text-[2vw] lg:text-[1vw]"
        style={{ fontFamily: "ClashDisplay-Medium" }}
      >
        <ul className="flex gap-[2vw]">
          <li className="lg:hidden">MENU</li>
          <li className="hidden lg:block">
            <Link to="/">HOME</Link>
          </li>
          <li className="hidden lg:block">
            (<Link to="/women/categories">WOMEN</Link>|
            <Link to="/men/categories">MEN</Link>)
          </li>
          <li className="hidden lg:block">
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>
        <p className="hidden lg:block" style={{ wordSpacing: "0.4vw" }}>
          13:30 - 06/04/2023 | <Link to="/cgu">CGU</Link>{" "}
          <Link to="/contact">CONTACT</Link> | MADE IN FRANCE
        </p>
        <ul className="flex gap-[2vw]">
          <li
            className="hidden lg:block hover:cursor-pointer"
            onClick={() => openSearch(inputRef.current, bgModalRef.current)}
          >
            SEARCH
          </li>
          <li className="hidden lg:block">
            <Link to="/login">CONNECT</Link>
          </li>
          <li>
            <Link to="/cart">CART 00</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
