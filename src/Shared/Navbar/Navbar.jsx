
import { NavLink } from "react-router-dom";
import MenuDropdown from "./MenuDropDown";


const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/h">All Assignment</NavLink></li>
        <li><NavLink to="/online-booking">Online Booking</NavLink></li>
        <li><NavLink to="/n">Contact</NavLink></li>
        <li><NavLink to="/tracking">Tracking</NavLink></li>
    </>

    return (

        <div className="navbar  bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-lg rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img src="https://transp-nextjs.vercel.app/assets/imgs/template/logo.svg" alt="Logo" />
            </div>
            <div className="navbar-center hidden  lg:flex">
                <ul className="menu menu-horizontal text-lg px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <MenuDropdown />
            </div>
        </div>

    );
};

export default Navbar;