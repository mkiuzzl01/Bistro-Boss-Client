import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { TbShoppingCart } from "react-icons/tb";
import useCarts from "../hooks/useCarts";
const Navbar = () => {
  const { user, logout } = useAuth();
  const [items] = useCarts();
  const handleLogout = () => {
    logout();
  };
  const navLink = (
    <>
      <Link to="/">Home</Link>
      <Link to="/Menu">Our Menu</Link>
      <Link to="/Shop/salad">Our Shop</Link>
      <Link>
        <Link to='/Dashboard' className="badge">
        <TbShoppingCart className="text-2xl"/>
          <div className="badge badge-secondary">+{items.length}</div>
        </Link>
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar max-w-7xl m-auto fixed z-10 opacity-50  bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="space-x-2">
              <span>{user.email}</span>
              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/Login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
