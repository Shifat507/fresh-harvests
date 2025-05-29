import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import AllProducts from '../components/AllProducts';
import AboutUs from './AboutUs';
import poster from '../assets/banner.png';

const Home = () => {
    // Countdown state
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Countdown logic
    useEffect(() => {
        const countdownTarget = new Date("2025-06-10T23:59:59");

        const updateCountdown = () => {
            const now = new Date();
            const difference = countdownTarget - now;

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Banner />
            <section className='mt-34'>
                <Heading
                    subTitle={'Our Products'}
                    title={'Our Fresh Products'}
                    description={
                        'We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.'
                    }
                />

                {/* All Products */}
                <div>
                    <AllProducts />
                </div>

                {/* About Us */}
                <div className='mt-34'>
                    <AboutUs />
                </div>

                {/* Poster with Countdown */}
                <div className='mt-36'>
                    <div
                        className="hero w-full py-30"
                        style={{
                            backgroundImage: `url(${poster})`,
                        }}
                    >
                        <div className="hero-content flex justify-start items-start w-full px-10">
                            <div className="max-w-xl text-left">
                                <span className='bg-green-100 text-[#749b3f] px-2 py-1 rounded-md font-semibold'>Special Offer</span>
                                <h1 className="text-3xl md:text-5xl font-bold mt-4">Seasonal Fruit Bundle</h1>
                                <p className="mb-5 text-2xl md:text-4xl font-bold">
                                    Discount up to <span className='text-[#ff6a19]'>80% OFF</span>
                                </p>

                                {/* Countdown Timer */}
                                <div className='flex items-center gap-3'>
                                    {/* Days */}
                                    <div className='p-4 py-5 bg-white w-20 flex justify-center'>
                                        <div>
                                            <p className='text-4xl font-semibold text-center'>
                                                {String(timeLeft.days).padStart(2, '0')}
                                            </p>
                                            <p className='text-md font-semibold text-center'>Days</p>
                                        </div>
                                    </div>
                                    {/* Hours */}
                                    <div className='p-4 py-5 bg-white w-20 flex justify-center'>
                                        <div>
                                            <p className='text-4xl font-semibold text-center'>
                                                {String(timeLeft.hours).padStart(2, '0')}
                                            </p>
                                            <p className='text-md font-semibold text-center'>Hour</p>
                                        </div>
                                    </div>
                                    {/* Minutes */}
                                    <div className='p-4 py-5 bg-white w-20 flex justify-center'>
                                        <div>
                                            <p className='text-4xl font-semibold text-center'>
                                                {String(timeLeft.minutes).padStart(2, '0')}
                                            </p>
                                            <p className='text-md font-semibold text-center'>Min</p>
                                        </div>
                                    </div>
                                    {/* Seconds */}
                                    <div className='p-4 py-5 bg-white w-20 flex justify-center'>
                                        <div>
                                            <p className='text-4xl font-semibold text-center'>
                                                {String(timeLeft.seconds).padStart(2, '0')}
                                            </p>
                                            <p className='text-md font-semibold text-center'>Second</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-8'>
                                    <span className='text-lg md:text-2xl font-bold px-3 py-1 bg-[#176d38] text-white rounded-3xl'>CODE : <span className='text-[#fac714]'>FRESH28</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
