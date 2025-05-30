import React, { useContext, useState } from 'react';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import logo from '../assets/logo.JPG';
import { AuthContext } from '../providers/Authproviders';

const Navbar = () => {
    const [modalView, setModalView] = useState('login'); // 'login' or 'register'
    const { user, logOut } = useContext(AuthContext);

    const openModal = (view) => {
        setModalView(view);
        document.getElementById('my_modal_3').showModal();
    };

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    };

    const links = (
        <>
            <li className='md:mx-3'><NavLink to='/'>Home</NavLink></li>
            <li className='md:mx-3'><NavLink to='/shop'>Shop</NavLink></li>
            <li className='md:mx-3'><NavLink to='/aboutUs'>About Us</NavLink></li>
            <li className='md:mx-3'><NavLink to='/blog'>Blog</NavLink></li>
        </>
    );

    const closeModal = () => {
        const modal = document.getElementById('my_modal_3');
        if (modal) modal.close();
    };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
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
                <Link to='/'>
                    <img src={logo} alt="Logo" className='w-44' />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end space-x-2">
                <div className='hidden md:block'>
                    <button className="btn"><FaHeart /> Favorites</button>
                </div>
                <button className="btn"><FaCartShopping /> Cart</button>
                {
                    user
                        ? <button onClick={handleSignOut} className="btn">Sign out</button>
                        : <button className="btn" onClick={() => openModal('login')}>Sign in</button>
                }

                {/* Modal */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box relative">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        {
                            modalView === 'login'
                                ? <Login
                                    switchToRegister={() => setModalView('register')}
                                    closeModal={closeModal}
                                />
                                : <Register
                                    switchToLogin={() => setModalView('login')}
                                    closeModal={closeModal}
                                />
                        }
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Navbar;
