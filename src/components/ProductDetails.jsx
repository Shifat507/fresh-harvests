import React, { useEffect, useState } from 'react';
import { FaCartShopping, FaHeart, FaStar } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import Heading from './Heading';
import Product from './Product';

const ProductDetails = () => {
    const [details, setDetails] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [categories, setCategories] = useState([]);

    const data = useLoaderData();

    useEffect(() => {
        setDetails(data.data);
    }, [data]);

    useEffect(() => {
        fetch('https://code-commando.com/api/v1/products')
            .then(res => res.json())
            .then(data => {
                if (data?.data) {
                    setProducts(data.data);
                }
            });
    }, []);

    useEffect(() => {
        fetch('https://code-commando.com/api/v1/category')
            .then(res => res.json())
            .then(data => {
                if (data?.data) {
                    setCategories(data.data);
                }
            });
    }, []);

    const visibleProducts = showAll ? products : products.slice(0, 4);
    const displayCategory = categories.find(cat => cat.id === details?.categoryId)?.categoryName || '';

    const { productName, images, description, price } = details || {};

    const increase = () => setQuantity(quantity + 1);
    const decrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div>
            <section className='flex flex-col md:flex-row items-center gap-5 rounded-2xl shadow-lg mt-8 p-6'>
                <div className='w-full md:w-1/2'>
                    <img src={images} alt={productName || 'Product'} />
                </div>
                <div className='w-full md:w-1/2'>
                    <span className='bg-green-100 text-[#749b3f] px-2 py-1 rounded-md font-semibold '>
                        {displayCategory}
                    </span>
                    <h2 className='text-3xl md:text-4xl font-bold my-4'>{productName}</h2>
                    <div className='flex items-center gap-3 mb-4'>
                        <div className='flex items-center gap-2 text-amber-300 '>
                            <FaStar size={20} />
                            <FaStar size={20} />
                            <FaStar size={20} />
                            <FaStar size={20} />
                            <FaStar size={20} />
                        </div>
                        <div>
                            <span className='text-md font-semibold '>5.0 | 1 Review</span>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-4xl font-bold text-[#ff6a19] mb-4'>${price * quantity}/kg</h3>
                        <p className='text-gray-600 text-lg'>{description}</p>
                    </div>

                    <div className='flex items-center gap-3 mt-16'>
                        <div>
                            <span className='text-md font-semibold'>Quantity </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className="join lg:join-horizontal">
                                <button onClick={decrease} className="btn join-item text-3xl">-</button>
                                <button className="btn join-item">{quantity}</button>
                                <button onClick={increase} className="btn join-item text-3xl">+</button>
                            </div>
                            <div>
                                <h3>/ kg</h3>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <button className="btn btn-soft md:px-18"><FaHeart size={20} /> Save</button>
                        <button className="btn bg-[#ff6a19] text-white md:px-18"><FaCartShopping size={20} /> Add to Cart</button>
                    </div>
                </div>
            </section>

            <section>
                <div className="my-16 max-w-3xl">
                    <div className="flex space-x-4">
                        <button
                            className={`tab px-4 py-2 rounded-t-md font-semibold border ${activeTab === 'description'
                                ? 'bg-[#85a857] text-white border-green-600'
                                : 'bg-white text-gray-800 border-base-300'
                                }`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </button>
                        <button
                            className={`tab px-4 py-2 rounded-t-md font-semibold border ${activeTab === 'reviews'
                                ? 'bg-[#85a857] text-white border-green-600'
                                : 'bg-white text-gray-800 border-base-300'
                                }`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            Reviews (1)
                        </button>
                    </div>

                    <div className="border border-t-0 border-base-300 rounded-b-xl  text-left">
                        {activeTab === 'description' && (
                            <p className="bg-[#f4f6f6] p-8">{description}</p>
                        )}

                        {activeTab === 'reviews' && (
                            <p className="bg-[#f4f6f6] p-8">
                                I’m genuinely impressed by how fresh and authentic this product is. From the moment I tried it, I could tell it’s made with real care and top-notch quality. It exceeded my expectations!
                            </p>
                        )}
                    </div>
                </div>
            </section>

            <section className='my-16'>
                <Heading
                    subTitle={'Our Products'}
                    title={'Related Products'}
                    description={'We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.'}
                />

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                    {visibleProducts.length > 0 ? (
                        visibleProducts.map((product) => (
                            <Product key={product.id} product={product} />
                        ))
                    ) : (
                        <p className='text-center col-span-full mt-10'>No products found in this category.</p>
                    )}
                </div>

                {!showAll && products.length > 4 && (
                    <div className='text-center mt-12'>
                        <button
                            onClick={() => setShowAll(true)}
                            className='btn border-[#ff6900] text-[#ff6900] hover:bg-[#ff6900] hover:text-white'
                        >
                            See All Products
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default ProductDetails;
