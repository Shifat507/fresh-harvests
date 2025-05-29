import React from 'react';
import vegetableBucketImg from '../assets/vegetableBucket.png'
import cardImage from '../assets/cardImg.JPG'
import logo from '../assets/logo.JPG'
import leaf from '../assets/leaf.png'
const AboutUs = () => {
    return (
        <div className='w-full flex flex-col items-center md:flex-row mt-16'>
            <div className='w-1/2 relative'>

                <div className='absolute right-10 top-10'>
                    <img src={leaf} alt=""  className='w-16'/>
                </div>
                <div>
                    <img src={vegetableBucketImg} alt=""  className='rounded-b-full'/>
                </div>
                <div className='absolute -bottom-5 right-16'>
                    <img src={cardImage} alt="" className='w-40 rounded-lg'/>
                </div>
                <div className='absolute bottom-52 right-36'>
                    <img src={logo} alt="" className='w-36 rounded-lg'/>
                </div>
            </div>
            <div className='w-1/2 space-y-4'>
                <span className='bg-green-100 text-[#749b3f] px-2 py-1 rounded-md font-semibold'>About Us</span>
                <h1 className="text-2xl md:text-5xl font-bold mt-4">About Fresh Harvest</h1>
                <p>Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>

                <button className='btn border-[#ff6900] text-[#ff6900] hover:bg-[#ff6900] hover:text-white'>Read More</button>
            </div>
        </div>
    );
};

export default AboutUs;