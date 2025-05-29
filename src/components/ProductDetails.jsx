import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const data = useLoaderData();
    console.log(data.data);
    return (
        <div>
            <h1 className='text-center my-24'>Product Details here</h1>
        </div>
    );
};

export default ProductDetails;