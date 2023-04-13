import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="fixed flex justify-between w-full px-[6vw] mt-[1.25vh] text-[1vw]"
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
        CGU CONTACT | 13:30 - 06/04/2023 | MADE IN FRANCE
      </p>
      <ul className="flex gap-[2vw]">
        <li className="hidden lg:block">SEARCH</li>
        <li className="hidden lg:block">
          <Link to="/login">CONNECT</Link>
        </li>
        <li>
          <Link to="/cart">CART 00</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
