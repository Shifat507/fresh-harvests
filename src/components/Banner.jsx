import React from 'react';
import BannerImage from '../assets/bannerImg.png'
import dishImg from '../assets/dish.png'
import { FaApple, FaGooglePlay } from 'react-icons/fa6';
import leafImg from '../assets/leaf.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen py-10">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between md:w-11/12 mx-auto">
                <img
                    src={BannerImage}
                    className="w-full max-w-xl lg:max-w-2xl rounded-lg lg:ml-25"
                />
                <div>
                    <span className='bg-green-100 text-[#749b3f] px-2 py-1 rounded-md font-semibold'>Welcome to Fresh Harvest</span>
                    <h1 className="text-3xl md:text-5xl font-bold mt-3">Fresh Fruits and <br /> Vegetables</h1>
                    <p className="py-6">
                        At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables
                    </p>
                    <button className="btn bg-[#ff6a19] text-white">Shop Now</button>

                    <div className="card bg-[#ebebeb] w-64 md:w-80 shadow-sm md:ms-48 mt-5 p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="card-title text-[#212337]">Fresh Salad</h2>
                                <p className='text-[#157257] font-semibold text-md'>Up to <span className='text-[#212337] font-bold text-lg'>70% Off</span> </p>
                                <div className="mt-3">
                                    <span className="bg-[#157257] px-4 py-1 rounded-2xl font-bold text-sm"><span className='text-white'>CODE :</span> <span className='text-[#fac714] font-bold'>FRESH25</span></span>
                                </div>
                            </div>
                            <div>
                                <img src={dishImg} alt="" className='w-36' />
                            </div>
                        </div>
                    </div>

                    <div className='relative mt-5'>
                        <div className='absolute bottom-8 -left-4 md:-left-10 z-0'>
                            <img src={leafImg} alt="" width={75} />
                        </div>
                        <div className='relative z-20'>
                            <h4>Download App:</h4>
                            <div className='mt-3'>
                                <button className="btn btn-neutral mr-3"><FaGooglePlay size={20} /> Google Play</button>
                                <button className="btn btn-neutral"><FaApple size={20} /> Apple Store</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;