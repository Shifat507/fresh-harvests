import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const MainLayout = () => {
    const location = useLocation();
    return (
        <div>
            <header>
                <Navbar></Navbar>
                {
                    location.pathname === '/' && <Banner></Banner>
                }
            </header>
            <main className='max-w-2xs md:max-w-4xl lg:max-w-6xl mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;