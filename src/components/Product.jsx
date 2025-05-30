import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {id, images, productName, price} = product;
    return (
        <div className="card w-36 md:w-60 bg-base-100 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 mx-auto">
            <figure className="p-4">
                <img
                    src={images}
                    alt={productName}
                    className="rounded-xl h-28 md:h-32 object-contain"
                />
            </figure>
            <div className="card-body items-center text-center p-4">
                <h2 className="font-semibold text-lg">{productName}</h2>
                <p className="text-sm text-gray-500">${price}/kg</p>
                <div className="card-actions md:mt-3">
                    <Link to={`/productDetails/${id}`} className="btn bg-orange-500 hover:bg-orange-600 text-white w-full rounded-md px-2 md:px-12">
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;