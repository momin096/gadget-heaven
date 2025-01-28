import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";


const NavBar = () => {
    const location = useLocation();

    const links = <>
        <li><NavLink className='text-black md:text-white' to='/'>Home</NavLink></li>
        <li><NavLink className='text-black md:text-white' to='/statistics'>Statistics</NavLink></li>
        <li><NavLink className='text-black md:text-white' to='/dashboard'>Dashboard</NavLink></li>
    </>
    return (
        <div className='container mx-auto mt-1'>
            <div className={`navbar ${location.pathname === `${'/:name/:productId'}` ? 'bg-white' : 'bg-[#9538E2]' }  rounded-t-2xl text-white lg:px-20`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <NavLink to='/'><span className="btn btn-soft text-xl lg:text-2xl bg-[#9538E2] border-none text-white">Gadget Heaven</span></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-4">

                    {/* <button className="btn">
                       
                    </button> */}
                    
                    
                    <IoCartOutline className="text-4xl bg-white text-black p-1 rounded-full" />
                    <IoMdHeartEmpty className="text-4xl bg-white text-black p-1 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default NavBar