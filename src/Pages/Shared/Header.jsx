import React from 'react';
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from 'react-router-dom';
// import img1 '../../../resosses/icons/logo.svg'

const Header = () => {
    return (
        <header className='max-w-[1440px] mx-auto'>
            <div className="navbar bg-base-100 py-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li> 
                        <li><Link to='/'>About</Link></li> 
                        <li><Link to='/'>Services</Link></li> 
                        <li><Link to='/'>Blog</Link></li> 
                        <li><Link to='../login'>Contact</Link></li> 
                        <li><Link to='login'>Login</Link></li> 
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center gap-3'>
                        <div>
                            <HiOutlineShoppingBag className='w-6 h-6' />
                        </div>
                        <div>
                            <HiOutlineSearch className='w-6 h-6'/>
                        </div>
                        <button className="btn btn-outline btn-error">Appointment</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 