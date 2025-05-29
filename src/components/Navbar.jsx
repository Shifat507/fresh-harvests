import React, { useState } from 'react';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import logo from '../assets/logo.JPG'

const Navbar = () => {
    const [modalView, setModalView] = useState('login'); // 'login' or 'register'

    const openModal = (view) => {
        setModalView(view);
        document.getElementById('my_modal_3').showModal();
    };

    const links = <>
        <li className='md:mx-3'><NavLink to='/'>Home</NavLink></li>
        <li className='md:mx-3'><NavLink >Shop</NavLink></li>
        <li className='md:mx-3'><NavLink to='/aboutUs'>About Us</NavLink></li>
        <li className='md:mx-3'><NavLink>Blog</NavLink></li>
    </>;

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                {/* mobile menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="">
                    <img src={logo} alt="" className='w-44'/>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end space-x-2">
                <button className="btn"><FaHeart /> Favorites</button>
                <button className="btn"><FaCartShopping /> Cart</button>
                <button className="btn" onClick={() => openModal('login')}>Sign in</button>

                {/* Modal */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box relative">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        {
                            modalView === 'login'
                                ? <Login switchToRegister={() => setModalView('register')} />
                                : <Register switchToLogin={() => setModalView('login')} />
                        }
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Navbar;
