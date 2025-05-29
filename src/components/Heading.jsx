import React from 'react';

const Heading = ({ subTitle, title, description }) => {
    return (
        <div className='flex justify-center'>
            <div className='text-center'> 
                <span className='bg-green-100 text-[#749b3f] px-2 py-1 rounded-md font-semibold'>{subTitle}</span>
                <div>
                    <h2 className='text-3xl md:text-5xl font-bold mt-4'>{title}</h2>
                    <p className='text-md text-gray-600 lg:px-72 md:px-20 mt-4'>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default Heading;