import { NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
        <li>
            <NavLink className="lg:btn lg:bg-transparent lg:border lg:border-[#23BE0A] lg:text-[#23BE0A] lg:text-lg" to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink className="lg:btn lg:bg-transparent lg:border lg:border-[#23BE0A] lg:text-[#23BE0A] lg:text-lg" to='/listedbooks'>Listed Books</NavLink>
        </li>
        <li>
            <NavLink className="lg:btn lg:bg-transparent lg:border lg:border-[#23BE0A] lg:text-[#23BE0A] lg:text-lg" to='/pagetoread'>Pages To Read</NavLink>
        </li>
    </>
  return (
    <div className="navbar bg-base-100 lg:mt-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="p-1 lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28"
          >
            {links}
          </ul>
        </div>
        <a className="text-lg lg:text-4xl font-bold">Bookish Best</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-2 menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end lg:gap-2">
        <a className="btn bg-[#23BE0A] lg:px-8 lg:text-lg text-white hidden lg:flex">Sign In</a>
        <a className="btn bg-[#59C6D2] lg:px-8 lg:text-lg text-white hidden lg:flex">Sign Up</a>
        <a className="btn btn-sm bg-[#23BE0A] lg:px-8 lg:text-lg text-white lg:hidden">Sign In</a>
        <a className="btn btn-sm bg-[#59C6D2] lg:px-8 lg:text-lg text-white lg:hidden">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
