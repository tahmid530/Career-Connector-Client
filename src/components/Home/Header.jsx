import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Link } from "react-router-dom";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {user?<>
            <li><Link to='/all_jobs'>All Jobs</Link></li>
            <li><Link to='/add_job'>Add a Job</Link></li>
            <li><Link to='/applied_jobs'>Applied Jobs</Link></li>
            <li><Link to='/my_jobs'>My Jobs</Link></li>
            <li><Link onClick={handleLogOut}>Log Out</Link></li>
        </>
            : <li><Link to="/login">Login</Link></li>
        }

        {/* <li><Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        { user?.email ?  <>
            <li><Link to="/bookings">My Bookings</Link></li>
            <li><button onClick={handleLogOut}>Log out</button></li>
        </> 
        : <li> <Link to="/login">Login</Link> </li>
       } */}
    </>


    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/about'>
                        <button className="btn btn-ghost normal-case text-xl text-red-600 font-bold">Career Connector</button>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
