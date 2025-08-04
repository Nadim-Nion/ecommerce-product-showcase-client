import { Link } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";
import { useCart } from "../../hook/useCart";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <a>Product</a>
      </li>
      <li>
        <a>Order</a>
      </li>
    </>
  );

  const { cartItems } = useCart();
  console.log("addToCart:", cartItems.length);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          {/* Hamburger menu for the small screens */}
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-lg menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end relative mr-4">
        <div className="relative">
          <FaCartArrowDown className="text-3xl text-gray-700 hover:text-blue-600 cursor-pointer" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md animate-bounce">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
