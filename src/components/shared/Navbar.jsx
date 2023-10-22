import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    const links = <>
        <NavLink to='/'><a>Home</a></NavLink>
        <NavLink to='/about'><a>About</a></NavLink>
        <NavLink to='/services'><a>Services</a></NavLink>
        <NavLink to='/blog'><a>Blog</a></NavLink>
        <NavLink to='/contact'><a>Contact</a></NavLink>
    </>;

    return (
        <div className="navbar bg-base-100 h-28 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='max-h-fit' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2 text-base font-medium">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-error">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;