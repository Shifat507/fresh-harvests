import React from 'react';
import Heading from './Heading';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../assets/slider1.jpeg'
import slider2 from '../assets/slider2.jpeg'
import slider3 from '../assets/slider3.jpeg'



const Testimonial = () => {
    return (
        <div className="my-20 px-4 md:px-10">
            {/* Section Heading */}
            <Heading
                subTitle={'Testimonial'}
                title={'What Our Customers Say'}
                description={'Don’t just take our word for it—here’s what some of our customers have to say about their experience with Fresh Harvest:'}
            />

            {/* Carousel Section */}
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full flex flex-col md:flex-row">
                    <div>
                        <img src={slider1} alt="" className='w-18 md:w-24 rounded-t-full rounded-b-full '/>
                    </div>
                    <div className='mt-18 md:mx-12'>
                        <p className='px-6 md:px-12 py-6 bg-base-300'>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."</p>
                        <p className='text-md mt-5'><span className='font-semibold'>Jannifa -</span> Professional chef</p>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full flex flex-col md:flex-row">
                    <div>
                        <img src={slider2} alt="" className='w-18 md:w-28 rounded-t-full rounded-b-full '/>
                    </div>
                    <div className='mt-12 md:mx-12'>
                        <p className='px-6 md:px-12 py-6 bg-base-300'>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."</p>
                        <p className='text-md mt-3'><span className='font-semibold'>Jack -</span> Professional chef</p>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full flex flex-col md:flex-row">
                    <div>
                        <img src={slider3} alt="" className='w-18 md:w-28 rounded-t-full rounded-b-full '/>
                    </div>
                    <div className='mt-12  md:mx-12'>
                        <p className='px-6 md:px-12 py-6 bg-base-300'>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."</p>
                        <p className='text-md mt-3'><span className='font-semibold'>Jane Doe -</span> Professional chef</p>
                    </div>
                </div>
                
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                
            </div>

        </div>
    );
};

export default Testimonial;
