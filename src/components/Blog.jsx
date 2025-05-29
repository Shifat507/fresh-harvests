import React from 'react';
import Heading from './Heading';
import blog1 from '../assets/blog1.jpeg'
import blog2 from '../assets/blog2.jpeg'
import blog3 from '../assets/blog3.jpeg'
import { FaArrowRight } from 'react-icons/fa6';
const Blog = () => {
    return (
        <div className='my-16'>
            <div className='mb-10'>
                <Heading subTitle={'Our Blog'} title={'Fresh Harvest Blog'} description={'Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.'}></Heading>
            </div>

            {/* Blogs */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className="card bg-base-100 w-72 md:w-96 shadow-sm mx-auto">
                    <figure>
                        <img
                            src={blog1}
                            alt="Shoes" className='rounded-2xl'/>
                    </figure>
                    <div className="card-body px-0">
                        <span className='text-gray-600 font-semibold'>May 23, 2024</span>
                        <p className='text-lg font-semibold'>Exploring Seasonal Delights: A Guide to What's Fresh Right Now</p>
                        <div className="card-actions justify-start">
                            <button className="text-lg text-[#ff6a19] font-semibold cursor-pointer hover:underline flex items-center gap-2 mt-2">Read More <FaArrowRight size={15}/></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-72 md:w-96 shadow-sm mx-auto">
                    <figure>
                        <img
                            src={blog2}
                            alt="Shoes" className='rounded-2xl'/>
                    </figure>
                    <div className="card-body px-0">
                        <span className='text-gray-600 font-semibold'>May 23, 2024</span>
                        <p className='text-lg font-semibold'>Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads"</p>
                        <div className="card-actions justify-start">
                            <button className="text-lg text-[#ff6a19] font-semibold cursor-pointer hover:underline flex items-center gap-2 mt-2">Read More <FaArrowRight size={15}/></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-72 md:w-96 shadow-sm mx-auto">
                    <figure>
                        <img
                            src={blog3}
                            alt="Shoes" className='rounded-2xl'/>
                    </figure>
                    <div className="card-body px-0">
                        <span className='text-gray-600 font-semibold'>May 23, 2024</span>
                        <p className='text-lg font-semibold'>The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week</p>
                        <div className="card-actions justify-start">
                            <button className="text-lg text-[#ff6a19] font-semibold cursor-pointer hover:underline flex items-center gap-2 mt-2">Read More <FaArrowRight size={15}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;